import { createServerFn } from "@tanstack/react-start";

export type NewsCategory = "research" | "news" | "incidents";
export type Region = "uk" | "world";

export type NewsItem = {
  url: string;
  title: string;
  description: string;
  source: string;
  publishedAt?: string;
};

// Trusted source allowlists. Research is worldwide; news/incidents split UK vs worldwide.
const UK_NEWS = [
  "bbc.co.uk",
  "bbc.com",
  "theguardian.com",
  "ft.com",
  "telegraph.co.uk",
  "thetimes.co.uk",
  "sky.com",
  "news.sky.com",
  "independent.co.uk",
  "itv.com",
  "channel4.com",
  "metro.co.uk",
  "standard.co.uk",
  "mirror.co.uk",
  "express.co.uk",
  "dailymail.co.uk",
  "inews.co.uk",
  "thesun.co.uk",
  "scotsman.com",
  "heraldscotland.com",
  "walesonline.co.uk",
  "belfasttelegraph.co.uk",
  "tortoisemedia.com",
  "newstatesman.com",
  "spectator.co.uk",
  "economist.com",
  "ofcom.org.uk",
  "gov.uk",
  "nspcc.org.uk",
  "internetmatters.org",
  "5rightsfoundation.com",
];

const WORLD_NEWS = [
  "reuters.com",
  "apnews.com",
  "nytimes.com",
  "washingtonpost.com",
  "wsj.com",
  "bloomberg.com",
  "cnn.com",
  "nbcnews.com",
  "cbsnews.com",
  "abcnews.go.com",
  "npr.org",
  "theatlantic.com",
  "newyorker.com",
  "time.com",
  "wired.com",
  "theverge.com",
  "techcrunch.com",
  "arstechnica.com",
  "vox.com",
  "axios.com",
  "politico.com",
  "propublica.org",
  "aljazeera.com",
  "dw.com",
  "france24.com",
  "lemonde.fr",
  "spiegel.de",
  "elpais.com",
  "abc.net.au",
  "smh.com.au",
  "theage.com.au",
  "cbc.ca",
  "globeandmail.com",
  "japantimes.co.jp",
  "scmp.com",
  "straitstimes.com",
];

const RESEARCH_SOURCES = [
  // UK
  "gov.uk",
  "ofcom.org.uk",
  "imperial.ac.uk",
  "ucl.ac.uk",
  "ox.ac.uk",
  "cam.ac.uk",
  "kcl.ac.uk",
  "lse.ac.uk",
  "manchester.ac.uk",
  // Journals & publishers
  "nature.com",
  "thelancet.com",
  "bmj.com",
  "jamanetwork.com",
  "nejm.org",
  "springer.com",
  "sciencedirect.com",
  "wiley.com",
  "tandfonline.com",
  "sagepub.com",
  "cambridge.org",
  "oup.com",
  "plos.org",
  "frontiersin.org",
  "mdpi.com",
  "pnas.org",
  "science.org",
  "cell.com",
  // Repositories & global bodies
  "pubmed.ncbi.nlm.nih.gov",
  "ncbi.nlm.nih.gov",
  "psycnet.apa.org",
  "apa.org",
  "who.int",
  "unicef.org",
  "oecd.org",
  "europa.eu",
  "ec.europa.eu",
  "cdc.gov",
  "nih.gov",
  "hhs.gov",
  "surgeongeneral.gov",
  "commonsensemedia.org",
  "pewresearch.org",
];

type QueryConfig = { sources: string[]; query: string; tbs: string };

function buildConfig(category: NewsCategory, region: Region): QueryConfig {
  // 1 year window for news/incidents; 1 year for research too so we surface meaningful studies
  const tbs = "qdr:y";

  if (category === "research") {
    return {
      sources: RESEARCH_SOURCES,
      query:
        "study OR research children adolescents screen time social media smartphone mental health brain development anxiety depression",
      tbs,
    };
  }

  const sources = region === "uk" ? UK_NEWS : WORLD_NEWS;

  if (category === "news") {
    const query =
      region === "uk"
        ? "UK children social media smartphone harm regulation Ofcom Online Safety Act school phone ban"
        : "children teens social media smartphone harm regulation law school phone ban TikTok Instagram"; 
    return { sources, query, tbs };
  }

  // incidents
  const query =
    region === "uk"
      ? "UK child teen harm social media platform lawsuit inquest tragedy school phone incident"
      : "child teen harm social media platform lawsuit inquest suicide tragedy school incident";
  return { sources, query, tbs };
}

// In-memory cache keyed by category+region. Refresh monthly for research, 6h for the rest.
type CacheEntry = { at: number; items: NewsItem[] };
const cache = new Map<string, CacheEntry>();
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;
const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

function cacheTtl(category: NewsCategory) {
  return category === "research" ? MONTH_MS : SIX_HOURS_MS;
}

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function parseDateLoose(s?: string): number | undefined {
  if (!s) return undefined;
  const t = Date.parse(s);
  return Number.isFinite(t) ? t : undefined;
}

export const fetchNews = createServerFn({ method: "GET" })
  .inputValidator((data: { category: NewsCategory; region?: Region }) => ({
    category: data.category,
    region: data.region ?? "world",
  }))
  .handler(async ({ data }): Promise<{ items: NewsItem[]; cachedAt: string; error?: string }> => {
    const { category, region } = data;
    const key = `${category}:${region}`;
    const ttl = cacheTtl(category);

    const cached = cache.get(key);
    if (cached && Date.now() - cached.at < ttl) {
      return { items: cached.items, cachedAt: new Date(cached.at).toISOString() };
    }

    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
      return { items: [], cachedAt: new Date().toISOString(), error: "Firecrawl is not configured." };
    }

    try {
      const { default: Firecrawl } = await import("@mendable/firecrawl-js");
      const firecrawl = new Firecrawl({ apiKey });

      const cfg = buildConfig(category, region);
      const domainFilter = cfg.sources.map((d) => `site:${d}`).join(" OR ");
      const query = `(${domainFilter}) ${cfg.query}`;

      const res = await firecrawl.search(query, { limit: 24, tbs: cfg.tbs });

      const raw: Array<{ url?: string; title?: string; description?: string; date?: string; publishedDate?: string }> =
        ((res as { web?: unknown[] }).web as Array<{ url?: string; title?: string; description?: string; date?: string; publishedDate?: string }>) ??
        ((res as { data?: { web?: unknown[] } }).data?.web as Array<{ url?: string; title?: string; description?: string; date?: string; publishedDate?: string }>) ??
        [];

      const items: NewsItem[] = raw
        .filter((r) => r.url && r.title)
        .map((r) => {
          const publishedAt = r.publishedDate ?? r.date;
          return {
            url: r.url!,
            title: r.title!,
            description: (r.description ?? "").slice(0, 280),
            source: hostFromUrl(r.url!),
            publishedAt,
          };
        })
        // Newest first; undated entries sink to the bottom
        .sort((a, b) => {
          const ta = parseDateLoose(a.publishedAt) ?? 0;
          const tb = parseDateLoose(b.publishedAt) ?? 0;
          return tb - ta;
        });

      cache.set(key, { at: Date.now(), items });
      return { items, cachedAt: new Date().toISOString() };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      console.error("[news] firecrawl error", msg);
      if (cached) {
        return { items: cached.items, cachedAt: new Date(cached.at).toISOString(), error: msg };
      }
      return { items: [], cachedAt: new Date().toISOString(), error: msg };
    }
  });
