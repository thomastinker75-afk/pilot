import { createFileRoute } from "@tanstack/react-router";
import { UK_RESEARCH, WORLD_RESEARCH, type ResearchItem } from "@/content/research";
import { UK_ARTICLES, WORLD_ARTICLES, type ArticleItem } from "@/content/articles";
import { YouTubeVideo } from "@/components/YouTubeVideo";
import { ArrowUpRight, Play } from "lucide-react";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Research — Screens, Social Media & Child Safety" },
      {
        name: "description",
        content:
          "Research, reporting and discussions about children’s digital lives, with source types and limits explained for parents.",
      },
      { property: "og:title", content: "News & Research — Parent Tech Safety" },
      {
        property: "og:description",
        content:
          "Studies, journalism and discussions about children’s screen use, online safety and wellbeing.",
      },
    ],
  }),
});

const TABS: { key: "research" | "articles" | "videos"; label: string; sub: string }[] = [
  { key: "research", label: "Research & Studies", sub: "UK & worldwide studies" },
  { key: "articles", label: "Articles", sub: "News & real-world incidents" },
  { key: "videos", label: "Videos", sub: "Interviews, talks & reporting" },
];

type Video = {
  rank: number;
  id: string;
  title: string;
  channel: string;
  blurb: string;
  href?: string; // external page when not embeddable
};

const VIDEOS: Video[] = [
  {
    rank: 1,
    id: "UA8kZZS_bzc",
    title: "iGen: the smartphone generation",
    channel: "TEDx — Dr. Jean Twenge",
    blurb:
      "Psychology professor Jean Twenge presents her interpretation of trends in teen wellbeing and smartphone adoption. Trends over time alone cannot establish what caused them.",
  },
  {
    rank: 2,
    id: "zuaeyV29-Cs",
    title:
      "Social Media and Mental Health for Children and Teens: Why being present matters",
    channel: "Dartmouth Health",
    blurb:
      "A Dartmouth Health discussion about social media, young people and parental presence. Use the research section for study methods and limitations.",
  },
  {
    rank: 3,
    id: "yFc4yhZKP5U",
    title: "Doctor on How Screen Time Hurts Kids' Cognitive Development",
    channel: "BBC News",
    blurb:
      "BBC Senior Education Reporter Vanessa Clarke unpacks new UK government guidance on screen time for under-fives, with discussion of young children’s development and content choices.",
  },
  {
    rank: 4,
    id: "EPqItSmEaFE",
    title:
      "Chilling warning for parents as MRI scans show phones are damaging kids' brains",
    channel: "10 News",
    blurb:
      "A 10 News report with a strong claim in its headline. The headline is the publisher’s framing; this guide does not treat it as evidence that phones cause brain damage.",
  },
  {
    rank: 5,
    id: "VoLs3d_a13o",
    title: "How video games can impact your child's mental health",
    channel: "WJHL",
    blurb:
      "WJHL reporting on gaming and children’s mental health. A news discussion does not establish the effects of gaming for an individual child.",
  },
  {
    rank: 6,
    id: "C74amJRp730",
    title: "How a handful of tech companies control billions of minds every day",
    channel: "TED — Tristan Harris",
    blurb:
      "Former Google design ethicist Tristan Harris exposes how notifications, autoplay and streaks are engineered to exploit psychological vulnerabilities — a perspective on persuasive design rather than a measurement of each child’s risk.",
  },
  {
    rank: 7,
    id: "csubiPlvFWk",
    title: "Dr. Jonathan Haidt: how smartphones & social media impact mental health",
    channel: "Huberman Lab",
    blurb:
      "The author of The Anxious Generation and neuroscientist Andrew Huberman go deep on their interpretations of research on phones, adolescent wellbeing and possible responses.",
  },
  {
    rank: 8,
    id: "2ZKLaUbB33o",
    title: "Dr. Anna Lembke: how TikTok is physically rewiring your brain",
    channel: "The Diary of a CEO",
    blurb:
      "Stanford psychiatrist Anna Lembke (Dopamine Nation) discusses reward, habits and social media use — interviewed by Steven Bartlett.",
  },
  {
    rank: 9,
    id: "HrpmBifgB0Y",
    title: "Social media's impact on your mental health",
    channel: "ABC News",
    blurb:
      "ABC News reporting on social media and mental health. Read the linked research separately before drawing conclusions about cause or a child’s needs.",
  },
];

function NewsPage() {

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
      <p className="eyebrow">News & Research</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
        Research and reporting on children’s digital lives
      </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A selected reading and viewing list for parents. Studies, news stories and interviews answer different questions: an association is not proof of cause, and an individual incident does not show how common a risk is.
        </p>

      <p className="mt-4 text-sm text-muted-foreground">Research references and framing updated 21 September 2026. This is a curated list, not a live news feed or a systematic review.</p>
      <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-4 text-sm font-semibold underline underline-offset-4">
        {TABS.map(t => <a key={t.key} href={`#${t.key}`}>{t.label}</a>)}
      </nav>
      <section id="research" className="mt-12 scroll-mt-28"><h2 className="mb-6 font-display text-3xl">Research &amp; studies</h2><CuratedResearch /></section>
      <section id="articles" className="mt-16 scroll-mt-28"><h2 className="mb-6 font-display text-3xl">News &amp; reporting</h2><CuratedArticles /></section>
      <section id="videos" className="mt-16 scroll-mt-28"><h2 className="mb-4 font-display text-3xl">Talks, interviews &amp; video reporting</h2><p className="mb-6 text-sm text-muted-foreground">Video titles and opinions belong to their publishers. They are not clinical advice or proof that screen use causes brain damage. Check the underlying research before applying a claim to your child.</p><VideosGrid /></section>
    </div>
  );
}

function VideosGrid() {
  const orderedVideos = [...VIDEOS].sort((a, b) => a.rank - b.rank);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {orderedVideos.map((v) => (
        <article
          key={`${v.rank}-${v.id}`}
          style={{ order: v.rank }}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
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
              <YouTubeVideo id={v.id} title={v.title} />
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
          {"evidenceType" in item && item.evidenceType && <p className="mt-2 text-xs font-semibold">{item.evidenceType}</p>}
          {"limitation" in item && item.limitation && <p className="mt-2 text-sm text-muted-foreground">Limitations: {item.limitation}</p>}
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
