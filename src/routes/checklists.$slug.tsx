import { YouTubeVideo } from "@/components/YouTubeVideo";
import { publicPath } from "@/lib/public-path";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CHECKLISTS } from "@/content/data";
import { ArrowLeft, CheckCircle2, ExternalLink, PlayCircle, BookOpen, ShieldCheck, PhoneCall, Info } from "lucide-react";

export const Route = createFileRoute("/checklists/$slug")({
  component: ChecklistDetail,
  head: ({ params }) => {
    const c = CHECKLISTS.find((x) => x.slug === params.slug);
    if (!c) return { meta: [{ title: "Checklist not found" }] };
    return {
      meta: [
        { title: `${c.title} — step-by-step` },
        { name: "description", content: c.summary },
        { property: "og:title", content: `${c.title} — step-by-step` },
        { property: "og:description", content: c.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl">Checklist not found</h1>
      <Link to="/checklists" className="mt-6 inline-block text-primary">All checklists</Link>
    </div>
  ),
});

function ChecklistDetail() {
  const { slug } = Route.useParams();
  const c = CHECKLISTS.find((x) => x.slug === slug);
  if (!c) throw notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
      <Link to="/checklists" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All checklists
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{c.device}</span>
          <p className="eyebrow !mt-0">Check the current settings on your device</p>
        </div>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
          {c.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.summary}</p>
        {c.overview && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed">{c.overview}</p>
        )}
      </header>

      {c.heroVideo && (
        <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          {c.heroVideo.youtubeId ? (
            <div className="aspect-video w-full"><YouTubeVideo id={c.heroVideo.youtubeId} title={c.heroVideo.title ?? "Tutorial video"} /></div>
          ) : (
            <video
              src={c.heroVideo.src ? publicPath(c.heroVideo.src) : undefined}
              poster={c.heroVideo.poster}
              controls
              preload="metadata"
              className="aspect-video w-full bg-black"
            />
          )}
          {c.heroVideo.caption && (
            <figcaption className="px-5 py-3 text-sm text-muted-foreground">{c.heroVideo.caption}</figcaption>
          )}
        </figure>
      )}

      {c.sections && c.sections.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Step-by-step</h2>
          <div className="mt-6 space-y-6">
            {c.sections.map((s) => (
              <section key={s.title} className="border-t border-border py-7 first:border-t-0 first:pt-0 md:py-9">
                <div className={s.visual ? "grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-x-6 lg:gap-y-4" : undefined}>
                  <div className="lg:col-start-1 lg:row-start-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                    {s.intro && <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>}
                  </div>
                  {s.visual && (
                    <figure className="overflow-hidden rounded-lg border border-border bg-card lg:col-start-2 lg:row-span-2 lg:row-start-1">
                      {s.visual.youtubeId ? (
                        <div className="aspect-video w-full"><YouTubeVideo id={s.visual.youtubeId} title={s.visual.title} start={s.visual.startSeconds} /></div>
                      ) : null}
                      <figcaption className="p-4">
                        <p className="text-xs font-semibold uppercase text-primary">{s.visual.kind} · {s.visual.source}</p>
                        <p className="mt-1 font-semibold leading-snug">{s.visual.title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.visual.description}</p>
                        <a href={s.visual.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground">
                          Open official source <ExternalLink className="size-3.5" />
                        </a>
                      </figcaption>
                    </figure>
                  )}
                  <ol className="space-y-3 lg:col-start-1 lg:row-start-2">
                    {s.steps.map((step, i) => (
                      <li key={step} className="flex gap-3 text-base leading-relaxed">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            ))}
          </div>
        </section>
      )}

      {c.capabilities && c.capabilities.length > 0 && (
        <section className="mt-14">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            <ShieldCheck className="size-6 text-primary" /> What you can control
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {c.capabilities.map((cap) => (
              <div key={cap.label} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">{cap.label}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{cap.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {c.emergency && (
        <section className="mt-14 rounded-2xl border border-border bg-secondary p-6 md:p-7">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
            <PhoneCall className="size-5 text-primary" /> Plan how to call for help
          </h2>
          <p className="mt-3 leading-relaxed">{c.emergency}</p>
        </section>
      )}

      {c.tutorials && c.tutorials.length > 0 && (
        <section className="mt-14">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            <BookOpen className="size-6 text-primary" /> Official tutorials & videos
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Everything below links directly to Apple, Google, Meta, TikTok, Snap or Discord — no third-party blogs.</p>
          <ul className="mt-6 space-y-3">
            {c.tutorials.map((t) => (
              <li key={t.url}>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary"
                >
                  {t.type === "Video" ? (
                    <PlayCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                  ) : (
                    <BookOpen className="mt-0.5 size-5 shrink-0 text-primary" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold leading-snug group-hover:text-primary">{t.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t.source} · {t.type}</p>
                    {t.note && <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>}
                  </div>
                  <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {c.notes && c.notes.length > 0 && (
        <section className="mt-14 rounded-2xl border border-border p-6 md:p-7">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <Info className="size-5 text-primary" /> Things to keep in mind
          </h2>
          <ul className="mt-4 space-y-3">
            {c.notes.map((n) => (
              <li key={n} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="mt-20">
        <Link to="/checklists" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Back to all checklists
        </Link>
      </footer>
    </article>
  );
}
