# Guide discovery preview

Prepared 23 November 2026 from published main commit fc0bfd7d22ad4cced8cd7f035e2cfa3cef0a420d.

## Changes

- Header Search route with local matching over app guides, age guides, checklists, dictionary entries and main website pages.
- App finder with text and category filters, visible counts, reset and empty-result states.
- Homepage concern selector with eight topics linking only to existing guides and help resources.
- Search is excluded from the public sitemap and marked noindex. Search text is React state only; no URL query parameters, network submission, storage or analytics events were added.
- Existing guide content and resource replacements are retained.

## Checks

- TypeScript typecheck passed.
- Preview build and static checks passed for all 65 rendered routes.
- A production-origin build and release checks passed, including the noindex Search route and 41-page public sitemap.
- Discovery checks cover ranking, Twitter/GTA aliases, emoji, short-term boundaries, unknown/empty input, app category combinations and destinations/fragments for all 237 search entries and all concern links.
- Browser checks cover concern selection, search, category filtering, reset, empty results, and responsive layouts at 390px and 1280px.

## Review

Local preview runs at http://127.0.0.1:4183/ with Search at /search/ and app filters at /apps/.
The generated preview disables indexing and uses the existing analytics hostname restriction.
No production publication has been performed for this change. Rebuild with the existing production environment when publishing after review.
