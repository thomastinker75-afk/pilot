import { Link } from "@tanstack/react-router";
import { publicPath } from "@/lib/public-path";
import type { GuideUpdate } from "@/content/guide-updates";

export function GuideReview({
  guide,
  path,
  category,
  categoryPath,
}: {
  guide: GuideUpdate;
  path: string;
  category: string;
  categoryPath: string;
}) {
  const origin = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: category, path: categoryPath },
    { name: guide.title, path },
  ];
  const url = origin ? `${origin}${publicPath(path)}` : undefined;
  const schema = origin
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline: guide.title,
            description: guide.description,
            dateModified: "2026-11-04",
            mainEntityOfPage: url,
            author: {
              "@type": "Organization",
              name: "Parent Tech Safety",
              url: `${origin}${publicPath("/about/")}`,
            },
            publisher: {
              "@type": "Organization",
              name: "Parent Tech Safety",
              url: `${origin}${publicPath("/")}`,
            },
            citation: guide.sources.map((s) => s.url),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: crumbs.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: `${origin}${publicPath(c.path)}`,
            })),
          },
        ],
      }
    : null;
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      )}
      <nav aria-label="Breadcrumb" className="mt-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap gap-2">
          {crumbs.map((c, i) => (
            <li key={c.path}>
              {i > 0 && (
                <span aria-hidden="true" className="mr-2">
                  /
                </span>
              )}
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <a href={publicPath(c.path)} className="underline">
                  {c.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <p className="mt-5 text-sm text-muted-foreground">
        By{" "}
        <Link to="/about" className="underline">
          Parent Tech Safety
        </Link>{" "}
        · Updated <time dateTime="2026-11-04">4 November 2026</time>
      </p>
      <section
        className="mt-8 rounded-2xl border border-border bg-secondary p-6"
        aria-labelledby="quick-answer"
      >
        <h2 id="quick-answer" className="font-display text-2xl">
          {guide.heading}
        </h2>
        <p className="mt-4 leading-relaxed">{guide.answer}</p>
        <nav aria-label="On this page" className="mt-5 flex flex-wrap gap-4 text-sm underline">
          <a href="#parent-questions">Key questions</a>
          <a href="#first-actions">What to do first</a>
          <a href="#source-review">Sources and review</a>
        </nav>
      </section>
      <section id="parent-questions" className="mt-10 space-y-6">
        {guide.sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-2xl">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </section>
      <section id="first-actions" className="mt-10">
        <h2 className="font-display text-2xl">What to do first</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6">
          {guide.actions.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ol>
        <p className="mt-5">
          <Link to="/age-guides" className="text-primary underline">
            Choose guidance for your child’s age
          </Link>{" "}
          ·{" "}
          <Link to="/checklists" className="text-primary underline">
            Device setup checklists
          </Link>
        </p>
      </section>
      <aside id="source-review" className="mt-10 rounded-2xl border border-border p-5">
        <h2 className="font-display text-xl">Sources and review</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This update checks the key answers against the official guidance linked below. Source
          review: 4 November 2026. Settings have not been tested on a child account or physical
          device as part of this update. Availability and menus can change; check the current
          instructions.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {guide.sources.map((s) => (
            <li key={s.url}>
              <a
                className="text-primary underline"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
