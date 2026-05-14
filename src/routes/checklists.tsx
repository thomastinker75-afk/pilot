import { createFileRoute } from "@tanstack/react-router";
import { CHECKLISTS, REVIEWED } from "@/content/data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checklists")({
  component: Checklists,
  head: () => ({
    meta: [
      { title: "Phone setup & safety checklists for parents" },
      { name: "description", content: "Practical step-by-step checklists: iPhone and Android child setup, YouTube safer mode, locking down a teen’s social accounts." },
    ],
  }),
});

function Checklists() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Checklists · Reviewed {REVIEWED}</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Five-minute setups that change everything.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        The single most useful thing a parent can do is get the device defaults right
        on day one. Here are the ones that matter most.
      </p>

      <div className="mt-12 space-y-8">
        {CHECKLISTS.map((c) => (
          <article key={c.slug} className="rounded-2xl border border-border bg-card p-7">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{c.title}</h2>
              <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{c.device}</span>
            </div>
            <ol className="mt-5 space-y-3">
              {c.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="size-4 text-primary" /> Should take 5 minutes or less.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
