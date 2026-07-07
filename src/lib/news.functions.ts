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

// Topical relevance filter applied to titles+descriptions. Every surfaced item
// must mention (a) a child/teen and (b) a screen/digital context and
// (c) a harm/risk angle — otherwise it's off-topic for this site.
const CHILD_RE = /\b(child|children|kid|kids|teen|teens|teenage[rs]?|adolescen|youth|young people|pupil|pupils|student|students|minor|minors|under[- ]?(?:13|16|18)|toddler|baby|babies|son|daughter|girl|girls|boy|boys)\b/i;
const TECH_RE = /\b(smartphone|smartphones|phone|phones|screen[- ]?time|screens?|social media|tiktok|instagram|snapchat|youtube|roblox|fortnite|discord|whatsapp|telegram|twitch|online|internet|video[- ]?games?|gaming|tablet|tablets|ipad|tv|television|streaming|app|apps|algorithm|algorithms|device|devices|digital)\b/i;
const HARM_RE = /\b(harm|harmful|risk|risks|danger|dangerous|addict|mental health|anxiety|depress|self[- ]?harm|suicide|sleep|grooming|exploit|abuse|bully|cyberbully|porn|sextort|predator|inquest|lawsuit|sued|ban|banned|regulat|safety|wellbeing|well-being|brain|attention|focus|eating disorder|body image|loneliness|tragedy|death|died|killed)\b/i;

function isOnTopic(title: string, description: string): boolean {
  const blob = `${title} ${description}`;
  // The search query itself already constrains for harm terms across trusted
  // child-safety sources, so the post-filter only requires that the headline
  // mentions a child/teen AND a screen/digital context. Requiring a harm
  // keyword in the title too was throwing away most legitimate coverage.
  return CHILD_RE.test(blob) && TECH_RE.test(blob);
}

function buildConfig(category: NewsCategory, region: Region): QueryConfig {
  const tbs = "qdr:y";

  if (category === "research") {
    return {
      sources: RESEARCH_SOURCES,
      query:
        '(children OR adolescents OR teens OR youth) AND (smartphone OR "social media" OR "screen time" OR gaming OR internet OR tablet) AND ("mental health" OR anxiety OR depression OR "brain development" OR sleep OR addiction OR wellbeing OR harm)',
      tbs,
    };
  }

  const sources = region === "uk" ? UK_NEWS : WORLD_NEWS;

  if (category === "news") {
    const query =
      region === "uk"
        ? '(children OR teens OR pupils OR "young people") AND (smartphone OR "social media" OR "screen time" OR TikTok OR Instagram OR Snapchat OR online OR gaming) AND (harm OR risk OR ban OR Ofcom OR "Online Safety Act" OR "mental health" OR addiction OR school)'
        : '(children OR teens OR adolescents OR youth) AND (smartphone OR "social media" OR "screen time" OR TikTok OR Instagram OR Snapchat OR online OR gaming) AND (harm OR risk OR ban OR regulation OR "mental health" OR addiction OR lawsuit OR school)';
    return { sources, query, tbs };
  }

  // incidents — real-world cases of harm tied to screens/social/games
  const query =
    region === "uk"
      ? '(child OR teen OR pupil OR "young person") AND ("social media" OR smartphone OR online OR app OR game) AND (inquest OR lawsuit OR suicide OR self-harm OR grooming OR sextortion OR exploitation OR tragedy OR death OR harm)'
      : '(child OR teen OR adolescent OR youth) AND ("social media" OR smartphone OR online OR app OR game) AND (inquest OR lawsuit OR suicide OR self-harm OR grooming OR sextortion OR exploitation OR tragedy OR death OR harm)';
  return { sources, query, tbs };
}


// In-memory cache keyed by category+region. Refresh weekly for news/incidents,
// monthly for research. Articles accumulate across refreshes and are only
// dropped when they pass the 1-year age cutoff.
type CacheEntry = { at: number; items: NewsItem[] };
const cache = new Map<string, CacheEntry>();
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

function cacheTtl(category: NewsCategory) {
  return category === "research" ? MONTH_MS : WEEK_MS;
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

      const fresh: NewsItem[] = raw
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
        .filter((it) => isOnTopic(it.title, it.description));

      // Merge with previously cached items, dedupe by URL (fresh wins),
      // drop anything older than 1 year, then sort newest first.
      const cutoff = Date.now() - YEAR_MS;
      const merged = new Map<string, NewsItem>();
      for (const it of cached?.items ?? []) merged.set(it.url, it);
      for (const it of fresh) merged.set(it.url, it);

      const items = Array.from(merged.values())
        .filter((it) => {
          const t = parseDateLoose(it.publishedAt);
          // Keep undated items only if they were just fetched (in `fresh`);
          // once they've been in cache and can't be dated, they stay until
          // they naturally age out via a future dated version.
          if (t === undefined) return true;
          return t >= cutoff;
        })
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
