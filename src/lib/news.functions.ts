import { createServerFn } from "@tanstack/react-start";

export type NewsCategory = "research" | "news" | "incidents";

export type NewsItem = {
  url: string;
  title: string;
  description: string;
  source: string;
  publishedAt?: string;
};

// UK-first trusted source allowlist per category
const SOURCES: Record<NewsCategory, string[]> = {
  research: [
    "gov.uk",
    "ofcom.org.uk",
    "imperial.ac.uk",
    "ucl.ac.uk",
    "ox.ac.uk",
    "cam.ac.uk",
    "nature.com",
    "thelancet.com",
    "bmj.com",
    "springer.com",
    "plos.org",
    "frontiersin.org",
  ],
  news: [
    "bbc.co.uk",
    "bbc.com",
    "theguardian.com",
    "ft.com",
    "telegraph.co.uk",
    "thetimes.co.uk",
    "sky.com",
    "independent.co.uk",
  ],
  incidents: [
    "bbc.co.uk",
    "bbc.com",
    "theguardian.com",
    "nspcc.org.uk",
    "internetmatters.org",
    "5rightsfoundation.com",
  ],
};

const QUERIES: Record<NewsCategory, string> = {
  research: "study children screen time social media mental health brain development UK",
  news: "UK children social media smartphone harm regulation Ofcom Online Safety Act",
  incidents: "child harm social media platform lawsuit tragedy UK school phone ban",
};

// Simple in-memory cache per worker instance
type CacheEntry = { at: number; items: NewsItem[] };
const cache = new Map<NewsCategory, CacheEntry>();
const CACHE_MS = 6 * 60 * 60 * 1000; // 6 hours

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export const fetchNews = createServerFn({ method: "GET" })
  .inputValidator((data: { category: NewsCategory }) => data)
  .handler(async ({ data }): Promise<{ items: NewsItem[]; cachedAt: string; error?: string }> => {
    const { category } = data;

    const cached = cache.get(category);
    if (cached && Date.now() - cached.at < CACHE_MS) {
      return { items: cached.items, cachedAt: new Date(cached.at).toISOString() };
    }

    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
      return { items: [], cachedAt: new Date().toISOString(), error: "Firecrawl is not configured." };
    }

    try {
      const { default: Firecrawl } = await import("@mendable/firecrawl-js");
      const firecrawl = new Firecrawl({ apiKey });

      const domainFilter = SOURCES[category].map((d) => `site:${d}`).join(" OR ");
      const query = `(${domainFilter}) ${QUERIES[category]}`;

      const res = await firecrawl.search(query, {
        limit: 12,
        tbs: "qdr:m", // past month
      });

      // SDK v2 shape: results.web[]
      const raw: Array<{ url?: string; title?: string; description?: string }> =
        ((res as { web?: unknown[] }).web as Array<{ url?: string; title?: string; description?: string }>) ??
        ((res as { data?: { web?: unknown[] } }).data?.web as Array<{ url?: string; title?: string; description?: string }>) ??
        [];

      const items: NewsItem[] = raw
        .filter((r) => r.url && r.title)
        .map((r) => ({
          url: r.url!,
          title: r.title!,
          description: (r.description ?? "").slice(0, 280),
          source: hostFromUrl(r.url!),
        }));

      cache.set(category, { at: Date.now(), items });
      return { items, cachedAt: new Date().toISOString() };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      console.error("[news] firecrawl error", msg);
      // Serve stale if we have it
      if (cached) {
        return { items: cached.items, cachedAt: new Date(cached.at).toISOString(), error: msg };
      }
      return { items: [], cachedAt: new Date().toISOString(), error: msg };
    }
  });
