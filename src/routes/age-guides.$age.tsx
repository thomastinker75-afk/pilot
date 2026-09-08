import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AGE_BANDS, REVIEWED, type ScreenTimeGuidance, type ExpertResource } from "@/content/data";
import { ArrowLeft, Clock, AlertTriangle, BookOpen, ExternalLink, GraduationCap } from "lucide-react";


export const Route = createFileRoute("/age-guides/$age")({
  component: AgeGuide,
  head: ({ params }) => {
    const band = AGE_BANDS.find((a) => a.slug === params.age);
    if (!band) return { meta: [{ title: "Age guide not found" }] };
    return {
      meta: [
        { title: `Online safety for ages ${band.range} — ${band.headline}` },
        { name: "description", content: band.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl">Guide not found</h1>
      <Link to="/age-guides" className="mt-6 inline-block text-primary">All age guides</Link>
    </div>
  ),
});

function AgeGuide() {
  const { age } = Route.useParams();
  const band = AGE_BANDS.find((a) => a.slug === age);
  if (!band) throw notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
      <Link to="/age-guides" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All age guides
      </Link>

      <header className="mt-8">
        <p className="eyebrow">Ages {band.range} · Reviewed {REVIEWED}</p>
        <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight md:text-6xl">
          {band.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          {band.summary}
        </p>
      </header>

      <div className="mt-14 space-y-12">
        <ScreenTimeBlock data={band.screenTime} />
        <Section title="Typical digital behaviours" items={band.behaviours} />
        <Section title="Risks that actually matter" items={band.risks} accent="danger" />
        <Section title="Settings worth changing tonight" items={band.settings} accent="action" />
        <Section title="How to talk about it" items={band.conversation} />
        <Section title="Red flags worth investigating" items={band.redFlags} accent="danger" />
        <DeepDive items={band.deepDive} />

      </div>

      <footer className="mt-20 rounded-2xl border border-border bg-secondary p-7">
        <p className="eyebrow">Need a hand?</p>
        <p className="mt-3 font-display text-2xl">
          Worried about something specific you’ve found?
        </p>
        <Link to="/help" className="mt-4 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
          Open the get-help guide
        </Link>
      </footer>
    </article>
  );
}

function Section({ title, items, accent }: { title: string; items: string[]; accent?: "danger" | "action" }) {
  const dot =
    accent === "danger" ? "bg-destructive" : accent === "action" ? "bg-primary" : "bg-foreground/60";
  return (
    <section>
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-base leading-relaxed">
            <span className={`mt-2.5 size-1.5 shrink-0 rounded-full ${dot}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ScreenTimeBlock({ data }: { data: ScreenTimeGuidance }) {
  return (
    <section className="rounded-2xl border border-border bg-secondary/60 p-7">
      <div className="flex items-center gap-2 text-primary">
        <Clock className="size-4" />
        <p className="eyebrow !text-primary">Screen time — what experts recommend</p>
      </div>
      <p className="mt-4 font-display text-2xl leading-snug tracking-tight">
        {data.recommended}
      </p>
      {data.ukContext && (
        <p className="mt-3 rounded-xl border border-border bg-background/60 p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">UK context: </span>
          {data.ukContext}
        </p>
      )}
      <p className="mt-2 text-sm text-muted-foreground">
        Total time across phone, tablet, TV, console and computer combined (school work usually excluded).
      </p>

      <div className="mt-7 grid gap-7 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="size-4" />
            <p className="eyebrow !text-destructive">What research associates with heavy use</p>
          </div>
          <ul className="mt-4 space-y-3">
            {data.consequences.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 text-foreground/80">
            <BookOpen className="size-4" />
            <p className="eyebrow">Sources around the world</p>
          </div>
          <ul className="mt-4 space-y-3">
            {data.sources.map((s) => (
              <li key={s.url} className="text-sm leading-relaxed">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 font-medium hover:text-primary"
                >
                  <span>{s.label}</span>
                  <ExternalLink className="mt-1 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
                </a>
                <p className="text-xs text-muted-foreground">
                  {s.org} · {s.region}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DeepDive({ items }: { items: ExpertResource[] }) {
  const typeStyles: Record<ExpertResource["type"], string> = {
    Study: "bg-primary/10 text-primary",
    Report: "bg-foreground/10 text-foreground",
    Article: "bg-secondary text-foreground/80",
    Video: "bg-destructive/10 text-destructive",
    Book: "bg-accent text-accent-foreground",
  };
  return (
    <section className="rounded-2xl border border-border bg-background p-7">
      <div className="flex items-center gap-2 text-foreground/80">
        <GraduationCap className="size-4" />
        <p className="eyebrow">If you want to know more from the experts</p>
      </div>
      <h2 className="mt-3 font-display text-2xl tracking-tight">
        Original studies, reports and videos behind the consequences above
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Hand-picked from paediatricians, regulators, academic journals and investigative reporting around the world. Open in a new tab.
      </p>
      <ul className="mt-6 divide-y divide-border">
        {items.map((r) => (
          <li key={r.url} className="py-4">
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${typeStyles[r.type]}`}>
                {r.type}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-start gap-1.5">
                  <span className="font-medium leading-snug group-hover:text-primary">{r.title}</span>
                  <ExternalLink className="mt-1 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{r.source}</span>
                {r.note && (
                  <span className="mt-1.5 block text-sm leading-relaxed text-foreground/75">{r.note}</span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
