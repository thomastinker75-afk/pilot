import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneCall, ShieldAlert, MessageSquareHeart, FileWarning } from "lucide-react";

export const Route = createFileRoute("/help")({
  component: Help,
  head: () => ({
    meta: [
      { title: "Worried right now? — Get help | Parent Tech Safety Hub" },
      { name: "description", content: "If you’ve just found something on your child’s device: a calm, step-by-step guide for the next hour, and where to report serious concerns." },
    ],
  }),
});

const STEPS = [
  { n: "01", t: "Take a breath. Don’t delete anything.", d: "Screenshots, messages and accounts are your evidence if this becomes serious. Photograph the screen with another device if you’re worried things will disappear." },
  { n: "02", t: "Don’t shout at your child.", d: "Whatever happened, your child needs to feel they can come to you. Anger today closes the door tomorrow." },
  { n: "03", t: "Identify what kind of concern this is.", d: "Bullying, stranger contact, sexual images, self-harm content, scams or coercion all have different next steps. Use the categories below." },
  { n: "04", t: "Decide: report, restrict, or talk.", d: "Most situations need all three — in that order. Reporting first preserves evidence." },
];

const linkClass =
  "font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary";

const ROUTES: { icon: JSX.Element; t: string; d: React.ReactNode }[] = [
  {
    icon: <ShieldAlert />,
    t: "Immediate danger or grooming",
    d: (
      <>
        If you believe a child is in immediate danger, contact your local
        emergency services (in the UK,{" "}
        <a className={linkClass} href="tel:999">999</a>). For online sexual
        exploitation in the UK, report to{" "}
        <a className={linkClass} href="https://www.ceop.police.uk/safety-centre/" target="_blank" rel="noopener noreferrer">
          CEOP
        </a>
        .
      </>
    ),
  },
  {
    icon: <FileWarning />,
    t: "Sexual images shared of your child",
    d: (
      <>
        Report to the platform. In the UK,{" "}
        <a className={linkClass} href="https://www.iwf.org.uk/" target="_blank" rel="noopener noreferrer">
          IWF
        </a>{" "}
        (
        <a className={linkClass} href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer">
          Take It Down
        </a>
        ) and{" "}
        <a className={linkClass} href="https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/" target="_blank" rel="noopener noreferrer">
          Report Remove
        </a>{" "}
        (
        <a className={linkClass} href="https://www.nspcc.org.uk/" target="_blank" rel="noopener noreferrer">
          NSPCC
        </a>{" "}
        +{" "}
        <a className={linkClass} href="https://www.iwf.org.uk/" target="_blank" rel="noopener noreferrer">
          IWF
        </a>
        ) can help remove images of under-18s.
      </>
    ),
  },
  {
    icon: <MessageSquareHeart />,
    t: "Self-harm or suicide content",
    d: (
      <>
        Reach out to your GP or a child mental health line (e.g.{" "}
        <a className={linkClass} href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer">
          Samaritans
        </a>{" "}
        —{" "}
        <a className={linkClass} href="tel:116123">116 123</a>,{" "}
        <a className={linkClass} href="https://www.youngminds.org.uk/" target="_blank" rel="noopener noreferrer">
          YoungMinds
        </a>{" "}
        in the UK). Remove access to the source content while you get support.
      </>
    ),
  },
  {
    icon: <PhoneCall />,
    t: "Bullying or coercion in chats",
    d: (
      <>
        Save screenshots. Report inside the app. If it involves another child,
        contact the school. If it involves an adult or threats, contact police
        (in the UK,{" "}
        <a className={linkClass} href="tel:101">101</a> non-emergency or{" "}
        <a className={linkClass} href="tel:999">999</a>).
      </>
    ),
  },
];

function Help() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <p className="eyebrow !text-destructive">Important</p>
        <p className="mt-2 text-sm">
          This page gives general guidance only. If a child is in immediate danger,
          contact your local emergency services first.
        </p>
      </div>

      <h1 className="mt-10 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        You’ve found something.
        <span className="block italic text-primary">Here’s the next hour.</span>
      </h1>

      <ol className="mt-12 space-y-8">
        {STEPS.map((s) => (
          <li key={s.n} className="grid gap-4 md:grid-cols-[80px_1fr]">
            <p className="font-display text-4xl font-semibold text-primary">{s.n}</p>
            <div>
              <h2 className="font-display text-2xl tracking-tight">{s.t}</h2>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-20 font-display text-3xl tracking-tight">Where to report or get help</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ROUTES.map((r) => (
          <div key={r.t} className="rounded-2xl border border-border bg-card p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">{r.icon}</span>
            <p className="mt-4 font-display text-lg font-semibold">{r.t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-secondary p-7">
        <p className="eyebrow">Once it’s contained</p>
        <p className="mt-3 font-display text-2xl">Walk through the right age guide together.</p>
        <Link to="/age-guides" className="mt-4 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
          Open the age guides
        </Link>
      </div>
    </div>
  );
}
