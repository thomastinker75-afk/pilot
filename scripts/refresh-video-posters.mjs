// Run manually when changing embedded videos. Builds use the committed images.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { APPS, CHECKLISTS } from "../src/content/data.ts";

const ids = new Set();
function collect(value) {
  if (!value || typeof value !== "object") return;
  for (const [key, item] of Object.entries(value)) {
    if (key === "youtubeId") ids.add(item);
    else collect(item);
  }
}
collect([APPS, CHECKLISTS]);
const news = await readFile(new URL("../src/routes/news.tsx", import.meta.url), "utf8");
for (const match of news.matchAll(/id: "([\w-]{11})"/g)) ids.add(match[1]);

const output = new URL("../public/media/video-posters/", import.meta.url);
await mkdir(output, { recursive: true });
const sources = [];
for (const id of [...ids].sort()) {
  if (!/^[\w-]{11}$/.test(id)) throw new Error(`Invalid video ID: ${id}`);
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Metadata unavailable for ${id}: ${response.status}`);
  const meta = await response.json();
  const thumbnail = new URL(meta.thumbnail_url);
  if (thumbnail.protocol !== "https:" || thumbnail.hostname !== "i.ytimg.com") throw new Error(`Unexpected image host for ${id}`);
  const image = await fetch(thumbnail, { signal: AbortSignal.timeout(15000) });
  if (!image.ok || !image.headers.get("content-type")?.startsWith("image/jpeg")) throw new Error(`Image unavailable for ${id}`);
  const bytes = Buffer.from(await image.arrayBuffer());
  if (bytes.length > 2_000_000 || bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error(`Unexpected JPEG for ${id}`);
  await writeFile(new URL(`${id}.jpg`, output), bytes);
  sources.push({ id, watchUrl, title: meta.title, publisher: meta.author_name, source: thumbnail.href, localPath: `/media/video-posters/${id}.jpg`, retrievedAt: new Date().toISOString(), bytes: bytes.length });
  console.log(`Saved poster ${id}: ${bytes.length} bytes`);
}
await writeFile(new URL("../docs/video-poster-sources.json", import.meta.url), JSON.stringify(sources, null, 2) + "\n");
