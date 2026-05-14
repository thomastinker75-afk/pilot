import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AGE_BANDS, REVIEWED } from "@/content/data";
import { ArrowLeft } from "lucide-react";

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
        <Section title="Typical digital behaviours" items={band.behaviours} />
        <Section title="Risks that actually matter" items={band.risks} accent="danger" />
        <Section title="Settings worth changing tonight" items={band.settings} accent="action" />
        <Section title="How to talk about it" items={band.conversation} />
        <Section title="Red flags worth investigating" items={band.redFlags} accent="danger" />
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
