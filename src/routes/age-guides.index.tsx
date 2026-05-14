import { createFileRoute, Link } from "@tanstack/react-router";
import { AGE_BANDS } from "@/content/data";

export const Route = createFileRoute("/age-guides/")({
  component: AgeGuidesIndex,
  head: () => ({
    meta: [
      { title: "Online safety by age — Parent Tech Safety Hub" },
      { name: "description", content: "Age-by-age online safety guidance for children 0–17: typical behaviours, real risks, settings to change, and how to talk about it." },
    ],
  }),
});

function AgeGuidesIndex() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Age guides</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Advice that fits the year your child is in.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Six age bands. Each one gives you typical behaviours, the risks that actually matter,
        the settings worth changing, and a few sentences you can use this week.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {AGE_BANDS.map((b) => (
          <Link
            key={b.slug}
            to="/age-guides/$age"
            params={{ age: b.slug }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md"
          >
            <div className="flex items-baseline justify-between">
              <p className="font-display text-5xl font-semibold tracking-tight">{b.range}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read →
              </p>
            </div>
            <p className="mt-3 font-display text-xl">{b.headline}</p>
            <p className="mt-3 text-sm text-muted-foreground">{b.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
