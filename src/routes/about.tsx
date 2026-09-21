import { WebsiteSupportNotice } from "@/components/WebsiteSupportNotice";
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
  { t: "Age-specific advice", d: "What helps a 7-year-old isn’t what helps a 16-year-old. Age guides distinguish the needs of younger children and teenagers." },
  { t: "Trust over surveillance", d: "We encourage conversation with your child alongside appropriate device controls." },
  { t: "Clear escalation routes", d: "Where harm is serious, we point straight to the right reporting service." },
  { t: "Reviewed openly", d: "Dates describe the checks completed. A wording review is not a clinical review or proof that every platform setting is current." },
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

      <WebsiteSupportNotice />
      <h2 className="mt-16 font-display text-3xl tracking-tight">How we write</h2>
      <div className="mt-6 space-y-5">
        {PRINCIPLES.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-lg font-semibold">{p.t}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="font-display text-3xl tracking-tight">Review scope</h2>
        <p className="mt-4 text-muted-foreground">On 21 September 2026 we reviewed official help and reporting routes, app guidance, screen-time evidence and setup checklists. We corrected unsupported statistics and removed evidence summaries we could not substantiate. This is a source-based editorial review, not a test of every app setting or a guarantee that every claim is current. The glossary explains possible meanings; its examples do not measure popularity or establish anyone’s intentions.</p>
        <p className="mt-4 text-muted-foreground">This pilot has not been independently reviewed by a safeguarding or clinical professional. Follow the linked official services for individual advice and check current platform instructions before changing settings.</p>
        <p className="mt-4 text-muted-foreground">This site is owned and published by Thomas Tinker. It is an educational guide for parents and carers, not a personal advice or reporting service.</p>
      </section>
      <h2 className="mt-16 font-display text-3xl tracking-tight">What we don’t do</h2>
      <ul className="mt-5 space-y-2.5 text-base text-muted-foreground">
        <li>— Name and shame children, parents or platforms.</li>
        <li>— Republish explicit, harmful or sensational content.</li>
        <li>— Diagnose your child or replace professional help.</li>
        <li>— Send messages entered in the explainer to an AI service.</li>
      </ul>
    </div>
  );
}
