import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { APPS, type AppGuide } from "@/content/data";
import { APP_AUDITS, type AppAudit } from "@/content/apps-audit";
import { ArrowLeft, ExternalLink, ShieldOff, ShieldCheck, MessageCircleQuestion, CalendarCheck, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/apps-audit/$slug")({
  component: AuditDetail,
  loader: ({ params }) => {
    const app = APPS.find((a) => a.slug === params.slug);
    if (!app) throw notFound();
    return { app, audit: APP_AUDITS[app.slug] ?? null };
  },
  head: ({ loaderData }) => {
    const app = loaderData?.app;
    const title = app
      ? `${app.name} — parent guide (audited format) | Parent Tech Safety`
      : "App guide | Parent Tech Safety";
    const description = app
      ? `${app.name}: what it is, who uses it, the official age, UK age controls, the top three risks, what you can change and what you cannot control.`
      : "Audited-format parent guide.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl">App not found</h1>
      <Link to="/apps-audit" className="mt-6 inline-block text-primary underline">
        Back to the audited guides
      </Link>
    </div>
  ),
});

const linkClass = "text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary";

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10">
      <p className="eyebrow">Step {n}</p>
      <h2 className="mt-2 font-display text-3xl tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items, dot = "bg-foreground/50" }: { items: string[]; dot?: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed">
          <span className={`mt-2.5 size-1.5 shrink-0 rounded-full ${dot}`} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function AuditDetail() {
  const { app, audit } = Route.useLoaderData() as { app: AppGuide; audit: AppAudit | null };

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <Link
        to="/apps-audit"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All audited guides
      </Link>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">
        <FlaskConical className="size-3.5 text-primary" /> Preview format ·{" "}
        <Link to="/apps/$slug" params={{ slug: app.slug }} className="underline">
          see the current live guide
        </Link>
      </div>

      <header className="mt-6">
        <p className="eyebrow">{app.category}</p>
        <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-6xl">{app.name}</h1>
        {audit?.auditNote && (
          <p className="mt-5 rounded-2xl border border-border bg-secondary p-4 text-sm text-muted-foreground">
            {audit.auditNote}
          </p>
        )}
      </header>

      <div className="mt-12 space-y-10">
        <Step n={1} title="What it is">
          <p className="text-lg leading-relaxed text-muted-foreground">{audit?.whatItIs ?? app.detail.overview}</p>
        </Step>

        <Step n={2} title="Who actually uses it">
          <p className="text-lg leading-relaxed text-muted-foreground">{audit?.whoUses ?? app.why}</p>
        </Step>

        <Step n={3} title="Official age">
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Official minimum age
              </dt>
              <dd className="mt-1 text-sm font-semibold">{app.officialMinAge}</dd>
            </div>
            <div className="bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                How we describe it to parents
              </dt>
              <dd className="mt-1 text-sm font-semibold">{app.minAge}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{app.detail.ageRationale}</p>
        </Step>

        <Step n={4} title="UK-specific age controls">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              UK age assurance
            </p>
            <p className="mt-1 font-display text-2xl tracking-tight">{app.ukAgeAssurance}</p>
            {app.ukAgeAssuranceNote && (
              <p className="mt-2 text-sm text-muted-foreground">{app.ukAgeAssuranceNote}</p>
            )}
          </div>
          {audit?.ukControls && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{audit.ukControls}</p>
          )}
        </Step>

        <Step n={5} title="Top 3 risks">
          <ol className="space-y-4">
            {(audit?.topRisks ?? app.risks.slice(0, 3)).map((r, i) => (
              <li key={r} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-destructive/10 text-sm font-semibold text-destructive">
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed">{r}</span>
              </li>
            ))}
          </ol>
        </Step>

        <Step n={6} title="What parents can change">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="size-4" />
            <p className="eyebrow !text-primary">Within your control</p>
          </div>
          <div className="mt-4">
            <Bullets items={audit?.canChange ?? app.settings} dot="bg-primary" />
          </div>
        </Step>

        <Step n={7} title="What parents cannot control">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <ShieldOff className="size-4" />
              <p className="eyebrow !text-destructive">Parental controls are not magic</p>
            </div>
            <div className="mt-4">
              <Bullets items={audit?.cannotControl ?? []} dot="bg-destructive" />
            </div>
            {!audit && (
              <p className="text-sm text-muted-foreground">Not yet audited for this platform.</p>
            )}
          </div>
        </Step>

        <Step n={8} title="Conversation starter">
          <div className="rounded-2xl border border-border bg-secondary p-6">
            <div className="flex items-center gap-2 text-foreground/80">
              <MessageCircleQuestion className="size-4" />
              <p className="eyebrow">Try this tonight</p>
            </div>
            <p className="mt-4 font-display text-2xl leading-snug tracking-tight">
              {audit?.conversationStarter ?? app.detail.parentTalkingPoints[0]}
            </p>
            {app.detail.parentTalkingPoints.length > 0 && (
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {app.detail.parentTalkingPoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Step>

        <Step n={9} title="Sources">
          <ol className="space-y-3">
            {app.detail.evidence.map((e, i) => (
              <li key={e.url} className="rounded-xl border border-border bg-card p-4 text-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  [{i + 1}] {e.type}
                  {e.year ? ` · ${e.year}` : ""}
                </p>
                <p className="mt-2">{e.claim}</p>
                <p className="mt-2 text-muted-foreground">
                  <span className="font-medium text-foreground">{e.publisher}</span> —{" "}
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {e.title} <ExternalLink className="inline size-3" />
                  </a>
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-6">
            <p className="eyebrow">Official settings guides</p>
            <ul className="mt-3 space-y-2 text-sm">
              {app.detail.settingsHowTo.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} inline-flex items-center gap-1.5`}
                  >
                    {s.label} <ExternalLink className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Step>

        <Step n={10} title="Last UK verification">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <CalendarCheck className="size-4 text-primary" />
            Source policies can change. Check the linked official guidance for the current options.
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Platform rules, age checks and parental controls change often. If a link breaks or a policy is
            superseded, this page is updated or the claim is removed at the next review.
          </p>
        </Step>
      </div>
    </div>
  );
}
