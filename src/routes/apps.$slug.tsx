import { YouTubeVideo } from "@/components/YouTubeVideo";
import { publicPath } from "@/lib/public-path";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { APPS, type AppGuide, type Evidence } from "@/content/data";
import { ArrowLeft, ExternalLink, ShieldCheck, BookOpen, Gavel, HeartPulse, Newspaper, FileText, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/apps/$slug")({
  component: AppDetail,
  loader: ({ params }) => {
    const app = APPS.find((a) => a.slug === params.slug);
    if (!app) throw notFound();
    return { app };
  },
  head: ({ loaderData }) => {
    const app = loaderData?.app;
    const title = app ? `${app.name} for parents — why ${app.minAge}, real risks & evidence` : "App guide";
    const description = app
      ? `${app.name}: why the ${app.minAge} age limit, what the evidence actually says, and settings to review. Sourced from regulators, child-safety charities and peer-reviewed research.`
      : "App guide for parents.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl">App not found</h1>
      <Link to="/apps" className="mt-6 inline-block text-primary underline">Back to all apps</Link>
    </div>
  ),
});

const linkClass = "text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary";

function evidenceIcon(t: Evidence["type"]) {
  if (t === "Regulator") return <Gavel className="size-4" />;
  if (t === "Health authority") return <HeartPulse className="size-4" />;
  if (t === "Peer-reviewed") return <BookOpen className="size-4" />;
  if (t === "Investigative journalism") return <Newspaper className="size-4" />;
  if (t === "Platform policy") return <FileText className="size-4" />;
  return <ShieldCheck className="size-4" />;
}

function AppDetail() {
  const { app } = Route.useLoaderData() as { app: AppGuide };

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <Link to="/apps" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All apps & games
      </Link>

      <header className="mt-8">
        <p className="eyebrow">{app.category} · Minimum age {app.minAge}</p>
        <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-6xl">
          {app.name}: a guide for parents
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{app.detail.overview}</p>

        <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          <div className="bg-card p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Policy review</dt>
            <dd className="mt-1 text-sm font-semibold">{app.slug === "roblox" ? "Account ages and controls: 21 September 2026" : "Check current official guidance"}</dd>
          </div>
          <div className="bg-card p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Official minimum age</dt>
            <dd className="mt-1 text-sm font-semibold">{app.officialMinAge}</dd>
          </div>
          <div className="bg-card p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">UK age assurance</dt>
            <dd className="mt-1 text-sm font-semibold">{app.ukAgeAssurance}</dd>
            {app.ukAgeAssuranceNote && (
              <dd className="mt-1 text-xs text-muted-foreground">{app.ukAgeAssuranceNote}</dd>
            )}
          </div>
        </dl>
      </header>


      {app.detail.riskVideo && (
        <section className="mt-10">
          <p className="eyebrow">Watch first · {app.detail.riskVideo.channel}</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight">
            {app.detail.riskVideo.title}
          </h2>
          <div className="mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
            {app.detail.riskVideo.videoUrl ? (
              <video
                className="h-full w-full"
                src={publicPath(app.detail.riskVideo.videoUrl)}
                poster={app.detail.riskVideo.poster}
                controls
                preload="metadata"
                playsInline
              />
            ) : app.detail.riskVideo.youtubeId ? (
              <YouTubeVideo id={app.detail.riskVideo.youtubeId} title={app.detail.riskVideo.title} />
            ) : null}
          </div>
          {app.detail.riskVideo.note && (
            <p className="mt-3 text-xs text-muted-foreground">{app.detail.riskVideo.note}</p>
          )}
        </section>
      )}

      <nav aria-label="Related help" className="mt-8 flex flex-wrap gap-5 text-sm font-semibold underline underline-offset-4"><Link to="/checklists">Device and privacy setup checklists</Link><Link to="/help">Help with an immediate concern</Link></nav>
      <hr className="rule my-12" />

      <section>
        <p className="eyebrow">Why {app.minAge}?</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">The age limit, explained</h2>
        <p className="mt-4 text-muted-foreground">{app.detail.ageRationale}</p>
      </section>

      <hr className="rule my-12" />

      <section>
        <p className="eyebrow">Evidence</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">What the sources say</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          These sources include platform policies, research and reporting. Historical findings describe their original dates and samples. Policy descriptions and age-assurance labels are not tests of every UK account. Menus and features can vary; follow the linked current instructions.
        </p>

        <ol className="mt-8 space-y-5">
          {app.detail.evidence.map((e, i) => (
            <li key={e.url} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  {evidenceIcon(e.type)}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    [{i + 1}] {e.type}{e.year ? ` · ${e.year}` : ""}
                  </p>
                  <p className="mt-2 text-base">{e.claim}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{e.publisher}</span> —{" "}
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {e.title} <ExternalLink className="inline size-3" />
                    </a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <hr className="rule my-12" />

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow !text-destructive">Real risks</p>
          <ul className="mt-4 space-y-2 text-sm">
            {app.risks.map((r) => (
              <li key={r} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-destructive" />{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Settings to check tonight</p>
          <ul className="mt-4 space-y-2 text-sm">
            {app.settings.map((s) => (
              <li key={s} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="rule my-12" />

      <section>
        <p className="eyebrow">Talk, don’t confiscate</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">How to start the conversation</h2>
        <ul className="mt-6 space-y-3">
          {app.detail.parentTalkingPoints.map((p) => (
            <li key={p} className="rounded-xl border border-border bg-card p-4 text-sm">{p}</li>
          ))}
        </ul>
      </section>

      <hr className="rule my-12" />

      <section>
        <p className="eyebrow">Official guides</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">Step-by-step settings</h2>
        <ul className="mt-6 space-y-2">
          {app.detail.settingsHowTo.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                {s.label} <ExternalLink className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="eyebrow">Video tutorials</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight">Watch it being done</h3>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Links open YouTube in a new tab. Where a link opens search results, check the uploader and publication date before following a tutorial.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {app.detail.videoTutorials.map((v) => (
              <li key={v.url}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-primary/10">
                    <PlayCircle className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium leading-snug">{v.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {v.url.includes("youtube.com/results") ? "YouTube search — uploader not verified" : v.channel} · YouTube <ExternalLink className="inline size-3" />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-16 text-xs text-muted-foreground">
        Platform controls and guidance can change. Follow the official links for current instructions; the About page explains which checks have been completed.
      </p>
    </div>
  );
}
