# Source sync — 21 September 2026

Imported all 36 source commits after `17939474260309e8f32dce72a3a8c122f855b57c` through `be90cf99f8f275b07c908764fcdaf2db1599be82` from `thomastinker75-afk/parent-guide`.

All updated editorial data and route implementations are retained. The only difference in `data.ts` is the standalone local Roblox video path. The app and checklist route differences are the existing base-path media helpers. The audit data, audit routes, age-guide route and app index match the source exactly.

Intentional exclusions: the Lovable build-package update and Bun lockfile remain excluded because this site uses the independent Vite/npm build. The AI translator remains deferred. Existing static hosting, preview indexing settings, local videos, dictionary improvements and narrow-screen fix are retained.

Added all 23 audit-preview URLs to static rendering; the export now contains 63 content pages. Build, TypeScript, static verification and focused semantic lint passed. Browser checks covered updated age/app pages, the audit index and detail, and all four checklists at 1440, 768 and 390 pixels, with no horizontal overflow or JavaScript page errors. External walkthrough contents were imported, not independently fact-checked.

This is a point-in-time sync, not an automatic connection to future source updates.
