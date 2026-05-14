import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Parent Tech Safety Hub" },
      { name: "description", content: "An independent, plain-English online safety hub for parents and carers. How we write, review and source our guidance." },
    ],
  }),
});

const PRINCIPLES = [
  { t: "Trusted sources first", d: "Guidance is based on reputable child protection organisations, regulators, medical bodies and platform safety documentation." },
  { t: "No fear without action", d: "If we name a risk, we tell you what to do about it. Same page, same scroll." },
  { t: "Age-specific advice", d: "What helps a 7-year-old isn’t what helps a 16-year-old. Every guide is banded by age." },
  { t: "Trust over surveillance", d: "We help you talk with your child — not just spy on them. Both matter; conversation first." },
  { t: "Clear escalation routes", d: "Where harm is serious, we point straight to the right reporting service." },
  { t: "Reviewed openly", d: "Every page shows when it was last reviewed. We update when platforms change." },
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Calm, practical, parent-first.
      </h1>
      <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
        Parent Tech Safety Hub is an independent, plain-English online safety
        resource for parents and carers. We are not a panic site, a vigilante
        platform, or a spyware shop. We exist to help an ordinary parent walk
        into their kitchen tonight and change three settings that matter.
      </p>

      <h2 className="mt-16 font-display text-3xl tracking-tight">How we write</h2>
      <div className="mt-6 space-y-5">
        {PRINCIPLES.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-lg font-semibold">{p.t}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl tracking-tight">What we don’t do</h2>
      <ul className="mt-5 space-y-2.5 text-base text-muted-foreground">
        <li>— Name and shame children, parents or platforms.</li>
        <li>— Republish explicit, harmful or sensational content.</li>
        <li>— Diagnose your child or replace professional help.</li>
        <li>— Store any data about your child.</li>
      </ul>
    </div>
  );
}
