import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, MessageSquare, Smartphone, Gamepad2, Sparkles, AlertTriangle } from "lucide-react";
import { AGE_BANDS, APPS, GLOSSARY } from "@/content/data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Parent Tech Safety Hub — Online safety guidance for parents" },
      { name: "description", content: "Plain-English, age-based online safety advice for parents: apps, games, slang, screen time, and the phone settings worth checking tonight." },
    ],
  }),
});

function Home() {
  const featured = AGE_BANDS.find((a) => a.slug === "11-13")!;
  const tiles = AGE_BANDS.filter((a) => a.slug !== "11-13").slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      {/* HERO — magazine masthead */}
      <section className="grid gap-10 pt-10 pb-16 md:grid-cols-12 md:pt-16 md:pb-24">
        <div className="md:col-span-8">
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck className="size-3.5" /> Practical guidance for parents
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight md:text-[4.5rem]">
            Understand your child’s
            <span className="italic text-primary"> digital world</span>
            <br className="hidden md:block" /> before it becomes a problem.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A trusted, plain-English hub for parents and carers. Age-based guidance,
            app and game explainers, slang you don’t recognise, and the phone
            settings worth checking tonight — without the panic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/age-guides"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start with your child’s age <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/checklists"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              Phone setup checklists
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="size-4" />
              <p className="eyebrow !text-destructive">Worried right now?</p>
            </div>
            <p className="mt-3 font-display text-xl leading-snug">
              If you’ve just found something on your child’s phone, take a breath.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Don’t delete anything. Don’t shout. We’ll walk you through the next
              hour.
            </p>
            <Link
              to="/help"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              Open the calm-first guide <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </aside>
      </section>

      <hr className="rule" />

      {/* FEATURED — magazine lead story */}
      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="eyebrow">Lead guide</p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            The first phone, ages {featured.range}
          </h2>
          <p className="mt-4 text-muted-foreground">{featured.summary}</p>
          <Link
            to="/age-guides/$age"
            params={{ age: featured.slug }}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Read the {featured.range} guide <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="md:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <ColumnList title="What they’re doing" items={featured.behaviours} />
            <ColumnList title="What to watch for" items={featured.risks} accent />
            <ColumnList title="Settings tonight" items={featured.settings} />
            <ColumnList title="How to talk about it" items={featured.conversation} />
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* AGE GRID */}
      <section className="py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">By age</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Pick a year. Get a plan.
            </h2>
          </div>
          <Link to="/age-guides" className="hidden text-sm font-medium text-primary hover:underline md:block">
            All age guides →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tiles.map((band, i) => (
            <Link
              key={band.slug}
              to="/age-guides/$age"
              params={{ age: band.slug }}
              className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 bg-secondary" : ""
              }`}
            >
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {band.range}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{band.headline}</p>
              </div>
              <p className="mt-6 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read guide →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* APPS STRIP */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Apps & games</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              The platforms in your child’s pocket.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each guide covers the minimum age, why kids use it, the real risks,
              and the exact settings to change.
            </p>
            <Link to="/apps" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              All app guides <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {APPS.slice(0, 6).map((a) => (
                <div key={a.slug} className="flex items-start gap-4 bg-card p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    {a.category === "Game" ? <Gamepad2 className="size-5" /> :
                     a.category === "Messaging" ? <MessageSquare className="size-5" /> :
                     a.category === "Video" ? <Sparkles className="size-5" /> :
                     <Smartphone className="size-5" />}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <p className="font-display text-lg font-semibold">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.minAge}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* GLOSSARY TEASER */}
      <section className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Decode</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Slang, acronyms, emoji.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We tell you what a term <em>can</em> mean — and when it’s worth a
              calm conversation rather than a confiscation.
            </p>
            <Link to="/glossary" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              Open the glossary <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ul className="md:col-span-7 divide-y divide-border rounded-2xl border border-border bg-card">
            {GLOSSARY.slice(0, 5).map((g) => (
              <li key={g.term} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 sm:flex sm:gap-4">
                <p className="shrink-0 font-display text-lg font-semibold sm:w-24">{g.term}</p>
                <p className="col-span-2 row-start-2 min-w-0 text-sm text-muted-foreground sm:flex-1">{g.meaning}</p>
                <RiskPill level={g.riskLevel} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function ColumnList({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border border-border p-5 ${accent ? "bg-secondary" : "bg-card"}`}>
      <p className="eyebrow">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/60" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RiskPill({ level }: { level: "Usually fine" | "Worth a chat" | "Investigate" }) {
  const tone =
    level === "Usually fine"
      ? "bg-secondary text-secondary-foreground"
      : level === "Worth a chat"
      ? "bg-accent text-accent-foreground"
      : "bg-destructive/10 text-destructive";
  return <span className={`shrink-0 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${tone}`}>{level}</span>;
}
