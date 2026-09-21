import { createFileRoute, Link } from "@tanstack/react-router";
import { APPS } from "@/content/data";
import { APP_AUDITS } from "@/content/apps-audit";
import { ArrowUpRight, Gamepad2, MessageSquare, Smartphone, Sparkles, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/apps-audit/")({
  component: AuditIndex,
  head: () => ({
    meta: [
      { title: "Apps & games — audited format (preview) | Parent Tech Safety Hub" },
      {
        name: "description",
        content:
          "Preview of the restructured app and game guides: what it is, who uses it, official age, UK age controls, top 3 risks, what parents can and cannot control, and a conversation starter.",
      },
      { property: "og:title", content: "Apps & games — audited format (preview)" },
      { property: "og:description", content: "Restructured parent guides with a ‘what parents cannot control’ section for every app and game." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function icon(c: string) {
  if (c === "Game") return <Gamepad2 className="size-5" />;
  if (c === "Messaging") return <MessageSquare className="size-5" />;
  if (c === "Video") return <Sparkles className="size-5" />;
  return <Smartphone className="size-5" />;
}

function AuditIndex() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">
        <FlaskConical className="size-3.5 text-primary" /> Preview — the live guides are unchanged
      </div>

      <p className="eyebrow mt-6">Apps & games · audited format</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        Same evidence, restructured the way the audit asked for.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Every guide now follows one order: what it is → who actually uses it → official age →
        UK-specific age controls → top three risks → what parents can change →
        <span className="font-medium text-foreground"> what parents cannot control</span> → conversation
        starter → sources → last UK verification.
      </p>
      <p className="mt-4 max-w-2xl rounded-2xl border border-border bg-secondary p-5 text-sm">
        The “what parents cannot control” section is the point of the change. Parental controls are not
        magic, and pretending otherwise is how families get caught out.
      </p>

      <p className="mt-6">
        <Link to="/apps" className="text-sm font-medium text-primary hover:underline">
          Compare with the current live guides →
        </Link>
      </p>

      {(["Social", "Messaging", "Video", "Game"] as const).map((cat) => {
        const items = APPS.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mt-16">
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{cat}</h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {items.length} {items.length === 1 ? "app" : "apps"}
              </span>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {items.map((a) => {
                const audit = APP_AUDITS[a.slug];
                return (
                  <article key={a.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                    <header className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        {icon(a.category)}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-display text-2xl font-semibold tracking-tight">{a.name}</h3>
                          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">
                            {a.officialMinAge}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          UK age assurance:{" "}
                          <span className="font-semibold text-foreground">{a.ukAgeAssurance}</span> · Last checked{" "}
                          {a.lastCheckedUK}
                        </p>
                      </div>
                    </header>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {audit?.whatItIs ?? a.why}
                    </p>

                    {audit && (
                      <div className="mt-5 rounded-xl border border-border bg-secondary/50 p-4">
                        <p className="eyebrow">What parents cannot control</p>
                        <ul className="mt-2 space-y-1.5 text-sm">
                          {audit.cannotControl.slice(0, 2).map((c) => (
                            <li key={c} className="flex gap-2">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      to="/apps-audit/$slug"
                      params={{ slug: a.slug }}
                      className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-all hover:gap-2.5"
                    >
                      Read the audited guide <ArrowUpRight className="size-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
