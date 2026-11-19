# Canonical URL release — 19 November 2026

Status: prepared and checked locally; not published.

Release workspace: C:/Users/thoma/Desktop/MCP/Personal/ParentGuide/Git/canonical-release-check
Base: bf954dfc99dbca455b4485e1f918e9ae61c56e7b (published navigation release).

- Router uses trailingSlash: always; all typed Link destinations use the same canonical form.
- SSR returns 308 for a finite list of real-page aliases before rendering.
- Static finalisation emits the same alias list as Cloudflare _redirects rules, covering asset-served requests too.
- The preview reads the emitted rules, preserving query strings.
- Index.html aliases and known slashless paths resolve directly to their canonical pages. Canonical paths do not redirect. Assets, APIs, writes and unknown URLs are not included in the alias list.
- Anchors remain browser-side and were checked using Help's support-services section.

Checks passed: typecheck; production-root build; /pilot/ preview build; all 64 rendered-route checks; 1,370 canonical internal links; 127 production redirect rules; GET/HEAD requests for every alias, including query preservation, one-hop destinations, assets and 404s. Browser check confirmed /help?campaign=preview → /help/?campaign=preview, preserved #support-services, and age-guide → Snapchat navigation ending in /apps/snapchat/.

Commands:
- node --test scripts/test-canonical-redirects.mjs
- node scripts/check-canonical-links.mjs (after build)
- node scripts/check-redirect-http.mjs http://127.0.0.1:4177 (against running preview)

After approval: publish only this isolated worktree's reviewed source changes and new tests/docs; exclude generated routeTree changes if any. Verify the real Cloudflare responses on /help, /checklists, /glossary and a guide, plus index.html variants and query strings. Then extend HTTP verification to every emitted alias. Do not claim the live redirect status from the local preview alone. Historical Search Console errors should be revalidated only after the live checks pass.
