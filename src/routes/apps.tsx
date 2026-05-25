import { createFileRoute, Link } from "@tanstack/react-router";
import { APPS } from "@/content/data";
import { ArrowUpRight, Gamepad2, MessageSquare, Smartphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/apps")({
  component: AppsIndex,
  head: () => ({
    meta: [
      { title: "App & game guides for parents — Parent Tech Safety Hub" },
      { name: "description", content: "What each app and game actually is, the real risks, and the exact settings to change. TikTok, Snapchat, Roblox, Fortnite, Discord and more." },
    ],
  }),
});

function icon(c: string) {
  if (c === "Game") return <Gamepad2 className="size-5" />;
  if (c === "Messaging") return <MessageSquare className="size-5" />;
  if (c === "Video") return <Sparkles className="size-5" />;
  return <Smartphone className="size-5" />;
}

function AppsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Apps & games</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The platforms in your child’s pocket — explained.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Each card covers the minimum age, why kids use it, the real risks, and the
        precise settings to check. No hype, no panic.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {APPS.map((a) => (
          <article key={a.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <header className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                {icon(a.category)}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold tracking-tight">{a.name}</h2>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">{a.minAge}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{a.category}</p>
              </div>
            </header>

            <p className="mt-4 text-sm text-muted-foreground">{a.why}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="eyebrow !text-destructive">Risks</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {a.risks.map((r) => <li key={r} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-destructive" />{r}</li>)}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Settings</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {a.settings.map((s) => <li key={s} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />{s}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
