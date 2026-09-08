# Standalone migration validation

Verified locally on 8 September 2026 using Node 24.11.0 and npm 11.1.0. Starting revision: `17939474260309e8f32dce72a3a8c122f855b57c` from `thomastinker75-afk/pilot`. The implementation was prepared on branch `standalone-static-site`. GitHub Pages publication is handled separately by the repository workflow; local checks do not establish deployment success.

## Passed

- Clean installation from the new npm lockfile: `npm ci --no-audit --no-fund`.
- Production compilation and static export: `npm run build`, with all 40 current content routes rendered as HTML.
- TypeScript: `npm run typecheck`.
- Export verification: `npm run check:static`, checking rendered content, local links/assets, MP4 signatures, indexing settings and absence of the former service references from the exported code.
- A public-mode build using `https://deployment-check.invalid` strictly as a test fixture passed `check:release`, including all canonical URLs and sitemap entries. This is not a selected or registered domain. The final delivered build was regenerated with the origin unset and is a non-indexable preview.
- The release check correctly rejected the final preview because no new domain is configured.
- Focused lint passed for the new build configuration, route list, scripts, root shell and dictionary. The two supplied source files with small content/layout edits also passed semantic lint with the inherited formatting rule excluded for that focused check only. The project's actual lint configuration is unchanged.
- `git diff --check`.
- Both MP4 files downloaded from the supplied current site with byte lengths matching their original asset metadata. SHA-256 checksums and provenance are recorded in `imported-media.json`.
- Chromium: dictionary search for `rizz`, empty-result handling and the Emoji category filter.
- Chromium: homepage and dictionary at 1440, 768, 390 and 320 CSS pixels with no horizontal document overflow. A narrow-screen glossary teaser overflow was repaired without changing its content.
- Chromium: mobile menu navigation to the age-guide index.
- Chromium: local Roblox MP4 metadata and playback; observed duration 95 seconds.
- Chromium: an unknown app address returned HTTP 404 and the static not-found page.
- Browser check recorded no JavaScript page errors and no Lovable, Firecrawl or translator requests, with Lovable requests explicitly blocked during the check.
- A representative age-guide page rendered its heading with JavaScript disabled.
- Homepage keyboard focus was visible; a 200% CSS zoom spot check had no document overflow. Reduced-motion media preference was enabled for visual checks.

## Existing limitations and scope

The full repository lint check is not clean. A separately extracted copy of the original revision produced 9,516 formatting errors and six component-export warnings using the same lint tools. No non-formatting errors were reported in that baseline. The migration does not disable the full check or perform a broad formatting rewrite of the supplied project.

The build reports a roughly 501 kB minified main JavaScript chunk, and some retained packages have deprecation notices. These did not prevent clean installation, compilation or browser checks. Performance optimization and general dependency upgrades were not part of this migration.

The design and editorial content are retained, apart from the deferred AI interface, replacement media path, corrected search count and narrow-screen layout fix. This was not a fresh fact-check of the supplied parenting guidance or external references, nor a full accessibility conformance audit. External YouTube videos and Google Fonts remain external resources. No new domain, DNS, hosting account or production deployment has been configured.

## GitHub project preview verification

The /pilot/ build passed TypeScript and all 40 static route checks. Chromium checks passed for dictionary search and categories, mobile menu navigation, local video playback, missing-page 404 handling, and layouts from 320 to 1440 pixels, with no JavaScript page errors or former platform requests.
