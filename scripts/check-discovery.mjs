import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { searchEntries, filterApps, SEARCH_ENTRIES, CONCERNS } from "../src/content/discovery.ts";
import { SITE_PATHS } from "../src/content/site-paths.ts";
assert.equal(searchEntries("WhatsApp")[0].href, "/apps/whatsapp/");
assert.equal(searchEntries("Twitter")[0].href, "/apps/x-twitter/");
assert.equal(searchEntries("grand theft auto")[0].href, "/apps/gta-online/");
assert.equal(searchEntries("rizz")[0].kind, "Dictionary");
assert.equal(searchEntries("💀")[0].title, "💀");
assert.ok(
  !searchEntries("AI").some((r) => ["Aight", "Main character", "Brain rot"].includes(r.title)),
  "Short terms must not match inside unrelated words",
);
assert.deepEqual(
  filterApps("GTA 5").map((a) => a.slug),
  ["gta-online"],
);
assert.deepEqual(filterApps("Roblox", "Messaging"), []);
assert.equal(filterApps("").length, 22);
assert.equal(filterApps("", "Game").length, 5);
assert.ok(searchEntries("iPhone").some((r) => r.kind === "Checklist"));
assert.ok(searchEntries("Family Link").some((r) => r.href === "/checklists/android-first-setup/"));
assert.equal(searchEntries("YoungMinds")[0].href, "/help/");
assert.deepEqual(searchEntries(" "), []);
assert.deepEqual(searchEntries("qzxvunknown"), []);
assert.deepEqual(searchEntries("<script>alert(1)</script>"), []);
assert.ok(searchEntries("screen time").some((r) => r.kind === "Age guide"));
assert.ok(searchEntries("  WHATSAPP  ")[0].href === "/apps/whatsapp/");
for (const entry of [...SEARCH_ENTRIES, ...CONCERNS.flatMap((c) => c.links)]) {
  const [path, fragment] = entry.href.split("#");
  assert.ok(
    SITE_PATHS.includes(path.replace(/\/$/, "") || "/"),
    `Unknown destination ${entry.href}`,
  );
  if (fragment) {
    const html = readFileSync(`dist/client${path}index.html`, "utf8");
    assert.ok(
      html.includes(`id="${decodeURIComponent(fragment)}"`),
      `Missing fragment ${entry.href}`,
    );
  }
}
const search = readFileSync("dist/client/search/index.html", "utf8");
assert.match(search, /name="robots" content="noindex/);
console.log(
  `PASS: search ranking, aliases, emoji, empty/unknown input and ${SEARCH_ENTRIES.length} search destinations plus all concern links.`,
);
