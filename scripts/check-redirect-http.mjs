import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const origin = process.argv[2] ?? "http://127.0.0.1:4177";
const rules = readFileSync("dist/client/_redirects", "utf8")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(/\s+/));
let checked = 0;
for (const [source, destination] of rules) {
  const requestUrl = origin + source + "?campaign=parents&term=a%2Fb";
  const response = await fetch(requestUrl, { redirect: "manual" });
  assert.equal(response.status, 308, source);
  assert.equal(
    new URL(response.headers.get("location"), origin).href,
    origin + destination + "?campaign=parents&term=a%2Fb",
    source,
  );
  const final = await fetch(origin + destination, { redirect: "manual" });
  assert.equal(final.status, 200, destination);
  assert.equal(
    (await fetch(requestUrl, { method: "HEAD", redirect: "manual" })).status,
    308,
    source,
  );
  checked++;
}
assert.equal((await fetch(origin + "/not-a-real-page/", { redirect: "manual" })).status, 404);
for (const asset of ["/favicon.svg", "/sitemap.xml", "/robots.txt"])
  assert.equal((await fetch(origin + asset, { redirect: "manual" })).status, 200, asset);
console.log(
  `PASS: ${checked} GET/HEAD aliases return one-hop 308s with query strings intact; destinations return 200; missing pages return 404; assets are unchanged.`,
);
