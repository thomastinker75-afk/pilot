import { createFileRoute, Link } from "@tanstack/react-router";
import { CHECKLISTS } from "@/content/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checklists/")({
  component: Checklists,
  head: () => ({
    meta: [
      { title: "Phone setup & safety checklists for parents" },
      { name: "description", content: "Full walkthroughs for setting up a child's iPhone or Android with Family Sharing / Family Link, plus YouTube and social-account lockdowns." },
    ],
  }),
});

function Checklists() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Practical checklists</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Five-minute setups that change everything.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        The single most useful thing a parent can do is get the device defaults right
        on day one. Start with the right OS guide — every step linked to official Apple
        or Google documentation and video tutorials.
      </p>

      <div className="mt-12 space-y-8">
        {CHECKLISTS.map((c) => (
          <article key={c.slug} className="rounded-2xl border border-border bg-card p-7">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{c.title}</h2>
              <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{c.device}</span>
            </div>
            <p className="mt-3 text-muted-foreground">{c.summary}</p>
            <ol className="mt-5 space-y-3">
              {c.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                {c.sections ? `${c.sections.length}-part full walkthrough with official tutorials` : "Quick setup — under 5 minutes."}
              </p>
              <Link
                to="/checklists/$slug"
                params={{ slug: c.slug }}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Open full guide <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
