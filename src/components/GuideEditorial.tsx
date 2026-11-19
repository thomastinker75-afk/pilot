import { publicPath } from "@/lib/public-path";
import {
  EDITORIAL_DATE,
  EDITORIAL_DATE_LABEL,
  type EditorialGuide,
} from "@/content/guide-editorial";

export function GuideEditorial({
  guide,
  path,
  category,
  categoryPath,
  scope,
}: {
  guide: EditorialGuide;
  path: string;
  category: string;
  categoryPath: string;
  scope: string;
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
            dateModified: EDITORIAL_DATE,
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
            ...(guide.checkedSources ? { citation: guide.checkedSources.map((s) => s.url) } : {}),
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
        <a href={publicPath("/about/")} className="underline">
          Parent Tech Safety
        </a>{" "}
        · Editorial update <time dateTime={EDITORIAL_DATE}>{EDITORIAL_DATE_LABEL}</time>
      </p>
      <aside
        aria-label="About this guide’s review"
        className="mt-6 rounded-2xl border border-border bg-secondary p-5"
      >
        <h2 className="font-display text-xl">
          {guide.note ? "Before you decide" : "About this guide"}
        </h2>
        {guide.note && <p className="mt-3 leading-relaxed">{guide.note}</p>}
        <p className="mt-3 text-sm text-muted-foreground">
          {scope} The editorial date does not mean every policy has been rechecked. Settings have
          not been tested on a child account or physical device as part of this update.
        </p>
        {guide.checkedSources && (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              The specific point above was checked against these sources on {EDITORIAL_DATE_LABEL}.
              Other evidence retains its original dates.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {guide.checkedSources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
