import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UK_RESEARCH, WORLD_RESEARCH, type ResearchItem } from "@/content/research";
import { UK_ARTICLES, WORLD_ARTICLES, type ArticleItem } from "@/content/articles";
import { ArrowUpRight, Play, Loader2 } from "lucide-react";

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

const TABS: { key: "research" | "articles" | "videos"; label: string; sub: string }[] = [
  { key: "research", label: "Research & Studies", sub: "UK & worldwide studies" },
  { key: "articles", label: "Articles", sub: "News & real-world incidents" },
  { key: "videos", label: "Videos", sub: "Experts on the child brain" },
];

type Video = {
  id: string;
  title: string;
  channel: string;
  blurb: string;
  href?: string; // external page when not embeddable
};

const VIDEOS: Video[] = [
  {
    id: "yFc4yhZKP5U",
    title: "What screens really do to your child's brain development",
    channel: "BBC News",
    blurb:
      "BBC Senior Education Reporter Vanessa Clarke unpacks new UK government guidance on screen time for under-fives, with researchers explaining how fast-paced content triggers stress responses in toddlers' developing brains.",
  },
  {
    id: "csubiPlvFWk",
    title: "Dr. Jonathan Haidt: how smartphones & social media impact mental health",
    channel: "Huberman Lab",
    blurb:
      "The author of The Anxious Generation and neuroscientist Andrew Huberman go deep on how phones alter brain plasticity, why girls and boys are affected differently, and what actually works.",
  },
  {
    id: "2ZKLaUbB33o",
    title: "Dr. Anna Lembke: how TikTok is physically rewiring your brain",
    channel: "The Diary of a CEO",
    blurb:
      "Stanford psychiatrist Anna Lembke (Dopamine Nation) explains how social media and short-form video replicate drug-seeking loops in the adolescent brain — interviewed by Steven Bartlett.",
  },
  {
    id: "C74amJRp730",
    title: "How a handful of tech companies control billions of minds every day",
    channel: "TED — Tristan Harris",
    blurb:
      "Former Google design ethicist Tristan Harris exposes how notifications, autoplay and streaks are engineered to exploit psychological vulnerabilities — essential context for why children are most at risk.",
  },
  {
    id: "UA8kZZS_bzc",
    title: "iGen: the smartphone generation",
    channel: "TEDx — Dr. Jean Twenge",
    blurb:
      "Psychology professor Jean Twenge shows that around 2012 — when teen smartphone ownership crossed 50% — loneliness, depression and sleep deprivation sharply diverged from earlier generations.",
  },
  {
    id: "swiped-c4",
    title: "Swiped: The School That Banned Smartphones",
    channel: "Channel 4 (UK)",
    blurb:
      "Emma and Matt Willis take smartphones away from Year 8 pupils at a Colchester secondary school for 21 days, while University of York psychologists measure the effects on wellbeing, sleep and focus.",
    href: "https://www.channel4.com/programmes/swiped-the-school-that-banned-smartphones",
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
          smartphones, social media and games are affecting children and teenagers.
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
        {tab === "videos" ? (
          <VideosGrid />
        ) : tab === "articles" ? (
          <CuratedArticles />
        ) : (
          <CuratedResearch />
        )}
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
            {v.href ? (
              <a
                href={v.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-700 text-background"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm font-medium backdrop-blur">
                  <Play className="size-4" /> Watch on {v.channel}
                </span>
              </a>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
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

function CuratedResearch() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">🇬🇧 UK research</h2>
          <p className="text-xs text-muted-foreground">Curated studies & official reports</p>
        </div>
        <ResearchGrid items={UK_RESEARCH} />
      </section>
      <section>
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">🌍 Worldwide</h2>
          <p className="text-xs text-muted-foreground">Curated studies & reports</p>
        </div>
        <ResearchGrid items={WORLD_RESEARCH} />
      </section>
    </div>
  );
}

function ResearchGrid({ items }: { items: ResearchItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
        More sources being added to this section soon.
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-foreground/40"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {item.source}
            </div>
            {item.publishedAt ? (
              <time className="text-xs text-muted-foreground" dateTime={item.publishedAt}>
                {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            ) : null}
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{item.title}</h3>
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
  );
}
function CuratedArticles() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">🇬🇧 UK</h2>
          <p className="text-xs text-muted-foreground">News & real-world incidents · newest first</p>
        </div>
        <ArticleGrid items={UK_ARTICLES} />
      </section>
      <section>
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">🌍 Worldwide</h2>
          <p className="text-xs text-muted-foreground">News & real-world incidents · newest first</p>
        </div>
        <ArticleGrid items={WORLD_ARTICLES} />
      </section>
    </div>
  );
}

function ArticleGrid({ items }: { items: ArticleItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
        More articles being added to this section soon.
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-foreground/40"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {item.source}
            </div>
            {item.publishedAt ? (
              <time className="text-xs text-muted-foreground" dateTime={item.publishedAt}>
                {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            ) : null}
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{item.title}</h3>
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
  );
}
