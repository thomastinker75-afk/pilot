# Parent Guide: standalone static site

The site uses React, TanStack Start and Vite to generate static HTML, CSS and JavaScript. Only `dist/client` is published. A server is used locally during development and build; no application server, database, Lovable account, AI credits or API keys are needed to serve the exported site.

The existing guides, articles, research, routes and styling are retained. The AI translator is deferred. A private, dictionary-based “Explain a message” tool runs entirely in the browser, alongside the searchable slang dictionary. It highlights possible meanings rather than generating sentence translations. See `docs/glossary-review-2026-09-21.md` for the content review and limitations. The unused Firecrawl integration and Lovable build configuration are removed. Both original MP4 files are stored in `public/media`; their source URLs and SHA-256 checksums are recorded in `docs/imported-media.json`. The Family Link MP4 is retained as an archive asset; the existing checklist continues to use its YouTube tutorial.

## Local use

Use Node.js 24.11 or later in the 24.x line, and npm.

```sh
npm ci
npm run dev
```

To preview exactly the files that would be hosted:

```sh
npm run build
npm run typecheck
npm run check:static
npm run preview
```

The static preview listens at `http://127.0.0.1:4173`. The preview helper serves files only and handles video range requests; it is not a required production service.

## Domain and publishing

The new domain has not been selected. Leave `VITE_SITE_URL` blank for now. Builds without it include `noindex, nofollow` and a robots exclusion, and omit the public sitemap. Do not publish that preview as the final public site.

When the new domain is ready, copy `.env.example` to `.env.local` and set `VITE_SITE_URL` to the real HTTPS origin, with no trailing slash. Alternatively, set this variable in the hosting build settings. Rebuild and run:

```sh
npm run build
npm run typecheck
npm run check:static
npm run check:release
```

The public build includes canonical URLs and a sitemap covering all 40 current content pages. Publish **only `dist/client`**, including its `.nojekyll` marker and `404.html`. Set `VITE_BASE_PATH=/` for a custom domain, or `/pilot/` for the GitHub project preview. A normal static host should serve `/path/index.html` for `/path` and return `404.html` with status 404 for missing paths. Do not configure a universal success/SPA fallback: all content routes already have HTML.

Hosting choices:

- GitHub Pages matches the existing sites' general workflow. Private source repositories require a qualifying paid GitHub plan; keep source visibility unchanged unless the owner explicitly chooses otherwise.
- Cloudflare Pages supports private GitHub repositories. Build command: `npm run build && npm run check:static && npm run check:release`. Output directory: `dist/client`. Use Node 24.x and set the real `VITE_SITE_URL` before public deployment.
- An existing static web host can receive the same `dist/client` folder. Hosting and domain charges depend on the selected provider and plan.

The GitHub Actions workflow publishes `main` to GitHub Pages using `/pilot/`, with search indexing disabled. The owner must enable Settings → Pages → GitHub Actions before deployment can succeed. The original Lovable site is unchanged. Historical source, including the deferred AI translator, remains available in Git history.

## Editing and checks

Edit content in `src/content/data.ts`, `articles.ts` and `research.ts`. Add new static page routes to `src/content/site-paths.ts`; app, checklist and age-guide detail paths are derived from the content. Rebuild after every content change.

`check:static` verifies all expected pages have actual rendered HTML, local links/assets exist, videos have an MP4 signature, preview/public indexing settings agree, and exported files contain no former Lovable/Firecrawl API references. `check:release` additionally requires the public HTTPS origin.

The imported repository has widespread existing Prettier formatting failures in the full `npm run lint` check. The standalone migration does not mass-format the supplied content or disable that check. Run focused lint on changed modules and the full type/build/export checks when reviewing this change; see `docs/validation.md` for results.

## References

- [TanStack static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)
- [GitHub Pages eligibility](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages pricing](https://developers.cloudflare.com/pages/functions/pricing/)
