import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { fetchNews, type NewsCategory, type NewsItem } from "@/lib/news.functions";
import { ArrowUpRight, Loader2, Play, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Research — Screens, Social Media & Child Safety" },
      {
        name: "description",
        content:
          "The latest UK-first research, news and real-world incidents on how smartphones, social media and games affect children's mental health and brain development.",
      },
      { property: "og:title", content: "News & Research — Parent Tech Safety Hub" },
      {
        property: "og:description",
        content:
          "Up-to-date studies, journalism and expert videos on the impact of screens and social media on children.",
      },
    ],
  }),
});

const TABS: { key: NewsCategory | "videos"; label: string; sub: string }[] = [
  { key: "research", label: "Research & Studies", sub: "Peer-reviewed and government" },
  { key: "news", label: "News", sub: "BBC, Guardian, FT, Times" },
  { key: "videos", label: "Videos", sub: "Experts on the child brain" },
  { key: "incidents", label: "Real-world incidents", sub: "Cases, lawsuits, school bans" },
];

type Video = {
  id: string;
  title: string;
  channel: string;
  blurb: string;
};

const VIDEOS: Video[] = [
  {
    id: "f97zNQM41eU",
    title: "Jonathan Haidt: The Anxious Generation",
    channel: "TED",
    blurb:
      "Social psychologist Jonathan Haidt on how the phone-based childhood is rewiring teen brains and driving the youth mental-health crisis.",
  },
  {
    id: "p4ZfkezDTXQ",
    title: "Dr. Anna Lembke: Dopamine, Screens & Addiction",
    channel: "Stanford / Huberman Lab",
    blurb:
      "Stanford psychiatrist explains how short-form video and games hijack the dopamine system — and what it does to a developing brain.",
  },
  {
    id: "c9d0l40v551o",
    title: "What screen time really does to children's brains",
    channel: "BBC News",
    blurb:
      "BBC Technology editor Zoe Kleinman investigates the neuroscience behind tantrums, attention loss and sleep disruption.",
  },
  {
    id: "MFaTHv2QyfU",
    title: "The Social Dilemma — how platforms hook kids",
    channel: "Netflix (trailer)",
    blurb:
      "Former Google, Facebook and Pinterest engineers explain the design tricks used to keep young people scrolling.",
  },
];

function NewsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("research");

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <p className="eyebrow">News & Research</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
        What the evidence — and the headlines — say about screens.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        A living feed of UK-first research, journalism, expert videos and real-world incidents on how
        smartphones, social media and games are affecting children. Updated automatically from trusted
        sources.
      </p>

      {/* Tabs */}
      <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:border-foreground/40"
              }`}
            >
              <div className="text-sm font-semibold">{t.label}</div>
              <div
                className={`mt-1 text-xs ${
                  active ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {t.sub}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {tab === "videos" ? <VideosGrid /> : <LiveFeed category={tab} />}
      </div>
    </div>
  );
}

function VideosGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {VIDEOS.map((v) => (
        <article key={v.id} className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="p-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Play className="size-3.5" />
              {v.channel}
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.blurb}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function LiveFeed({ category }: { category: NewsCategory }) {
  const fetcher = useServerFn(fetchNews);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["news", category],
    queryFn: () => fetcher({ data: { category } }),
    staleTime: 6 * 60 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 py-12 text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Fetching the latest from trusted UK sources…
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
        <AlertTriangle className="mt-0.5 size-4 text-destructive" />
        <div>
          Couldn't load the feed right now.
          {error instanceof Error ? <span className="block">{error.message}</span> : null}
        </div>
      </div>
    );
  }

  const items: NewsItem[] = data?.items ?? [];

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
        Nothing new to show yet. The feed updates automatically every few hours.
        {data?.error ? <span className="mt-2 block text-xs">({data.error})</span> : null}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-foreground/40"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {item.source}
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            {item.description ? (
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            ) : null}
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Read on {item.source}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
      {data?.cachedAt ? (
        <p className="mt-6 text-xs text-muted-foreground">
          Last refreshed {new Date(data.cachedAt).toLocaleString("en-GB")} · cached for 6 hours.
        </p>
      ) : null}
    </>
  );
}
