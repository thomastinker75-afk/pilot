import { WebsiteSupportNotice } from "@/components/WebsiteSupportNotice";
import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneCall, ShieldAlert, MessageSquareHeart, FileWarning } from "lucide-react";

export const Route = createFileRoute("/help")({
  component: Help,
  head: () => ({
    meta: [
      { title: "Worried right now? — Get help | Parent Tech Safety" },
      { name: "description", content: "If you’ve just found something on your child’s device: practical first steps and official services for urgent help and reporting serious concerns." },
    ],
  }),
});

const STEPS = [
  { n: "01", t: "Put your child’s immediate safety first.", d: "If there is immediate danger, call 999 in the UK. You do not need to collect evidence before asking for help. Stay calm and reassure your child that you will help them." },
  { n: "02", t: "Listen calmly and reassure your child.", d: "Let them explain in their own words. Make clear that asking for help was the right thing to do, and that you will help them find support." },
  { n: "03", t: "Identify what kind of concern this is.", d: "Bullying, stranger contact, sexual images, self-harm content, scams or coercion all have different next steps. Use the categories below." },
  { n: "04", t: "Get the right help for what happened.", d: "You can note usernames, links, the platform and when it happened. Do not screenshot, photograph, download or forward sexual images of anyone who may be under 18. Ask police how to handle material already on the device; do not delay a report to gather evidence." },
];

const linkClass =
  "font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary";

const ROUTES: { icon: ReactNode; t: string; d: ReactNode }[] = [
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
        Help your child report the account or content to the platform. For a child under 18,{' '}
        <a className={linkClass} href="https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/report-remove/" target="_blank" rel="noopener noreferrer">Childline’s Report Remove</a>{' '}
        works with the Internet Watch Foundation to help remove sexual images online, including AI fakes.{' '}
        <a className={linkClass} href="https://takeitdown.ncmec.org/" target="_blank" rel="noopener noreferrer">Take It Down</a>{' '}
        is a separate service from NCMEC for images taken when the person was under 18. It creates a digital fingerprint of an image already on their device; do not download or share an image to use it. These services cannot guarantee removal from every site, encrypted chat or someone else’s device.
      </>
    ),
  },
  {
    icon: <MessageSquareHeart />,
    t: "Self-harm or suicide content",
    d: (
      <>
        If your child is in immediate danger, call <a className={linkClass} href="tel:999">999</a>.
        If help is urgent but there is no immediate danger, use the urgent mental-health contacts below or ask for an urgent GP appointment. For someone who needs to talk,{' '}
        <a className={linkClass} href="https://www.samaritans.org/how-we-can-help/contact-samaritan/" target="_blank" rel="noopener noreferrer">Samaritans</a>{' '}
        offers free listening support day or night on <a className={linkClass} href="tel:116123">116 123</a>.
        Parents and carers can also use the{' '}
        <a className={linkClass} href="https://www.youngminds.org.uk/parent/parents-helpline/" target="_blank" rel="noopener noreferrer">YoungMinds Parents Helpline</a>{' '}
        on <a className={linkClass} href="tel:08088025544">0808 802 5544</a>: Monday, Thursday and Friday, 9.30am–4pm; Tuesday and Wednesday, 9.30am–6pm. This is not a crisis service; check its official page for current hours and online options.
        Ask what your child has seen and help them step away from distressing content while you seek support.
      </>
    ),
  },
  {
    icon: <PhoneCall />,
    t: "Bullying or coercion in chats",
    d: (
      <>
        Keep a note of messages, usernames and times, following the sexual-image precautions above. Report inside the app. If it involves another child,
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
          call <a className={linkClass} href="tel:999">999</a> in the UK, or your local emergency number elsewhere. Do not wait for a reply from this website.
        </p>
      </div>

      <h1 className="mt-10 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        You’ve found something.
        <span className="block italic text-primary">Here’s where to get help.</span>
      </h1>

      <p className="mt-5 text-sm text-muted-foreground">Reporting and support links checked 21 September 2026. This is general guidance, not an emergency response service.</p>
      <p className="mt-3 text-sm"><a className={linkClass} href="https://www.police.uk/advice/advice-and-information/online-safety/online-safety/sextortion/sextortion-reporting-it-to-us/" target="_blank" rel="noopener noreferrer">Police guidance on reporting and handling evidence</a></p>
      <p className="mt-5"><a href="#support-services" className="font-semibold underline underline-offset-4">Go straight to support numbers and reporting services</a></p>
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

      <h2 id="support-services" className="mt-20 font-display text-3xl tracking-tight">Contact a support service</h2>
      <p className="mt-4 text-muted-foreground">These are external services you can contact directly. This website provides general guidance and cannot respond to safeguarding concerns.</p>
      <div className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6">
        <p><strong>Adults worried about a child — NSPCC:</strong> <a className={linkClass} href="tel:08088005000">0808 800 5000</a>. Phone hours: Monday–Friday, 10am–4pm. <a className={linkClass} href="https://www.nspcc.org.uk/about-us/our-services/nspcc-helpline/" target="_blank" rel="noopener noreferrer">Official contact page, email option and current hours</a>. The NSPCC currently says email is available 11am–4pm daily and emails sent outside those hours are not received. Do not use email for an emergency.</p>
        <p><strong>Children and young people — Childline:</strong> <a className={linkClass} href="tel:08001111">0800 1111</a>. <a className={linkClass} href="https://www.childline.org.uk/get-support/contacting-childline/" target="_blank" rel="noopener noreferrer">Contact Childline and view online support options</a>.</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ROUTES.map((r) => (
          <div key={r.t} className="rounded-2xl border border-border bg-card p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">{r.icon}</span>
            <p className="mt-4 font-display text-lg font-semibold">{r.t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-border bg-card p-6" aria-labelledby="urgent-mental-health">
        <h2 id="urgent-mental-health" className="font-display text-2xl">Urgent mental-health help</h2>
        <p className="mt-3 text-sm">If someone has seriously injured themselves, taken an overdose, or you cannot keep them safe, call <a className={linkClass} href="tel:999">999</a> or go to A&amp;E. Do not wait for a routine appointment.</p>
        <ul className="mt-4 space-y-3 text-sm">
          <li><strong>England:</strong> call <a className={linkClass} href="tel:111">111</a> and select the mental-health option, or ask for an urgent GP appointment. <a className={linkClass} href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" target="_blank" rel="noopener noreferrer">NHS urgent help</a>.</li>
          <li><strong>Scotland:</strong> contact your GP or usual mental-health team; if you cannot access them and need urgent help, call NHS 24 on <a className={linkClass} href="tel:111">111</a> and choose the mental-health option. <a className={linkClass} href="https://www.nhsinform.scot/?illnesses=get-urgent-mental-health-help" target="_blank" rel="noopener noreferrer">NHS inform urgent help</a>.</li>
          <li><strong>Wales:</strong> call <a className={linkClass} href="tel:111">111</a> and press 2 for urgent mental-health support, available to all ages, day or night. <a className={linkClass} href="https://www.gov.wales/nhs-111-press-2-big-step-forward-access-urgent-mental-health-support" target="_blank" rel="noopener noreferrer">Welsh Government guidance</a>.</li>
          <li><strong>Northern Ireland:</strong> call Lifeline on <a className={linkClass} href="tel:08088088000">0808 808 8000</a>, free, 24 hours a day. You can call about yourself or someone you are worried about. <a className={linkClass} href="https://www.nidirect.gov.uk/articles/mental-health-emergency-if-youre-crisis-or-despair" target="_blank" rel="noopener noreferrer">nidirect crisis guidance</a>.</li>
        </ul>
      </section>

      <WebsiteSupportNotice />
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
