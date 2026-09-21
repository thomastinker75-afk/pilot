import { useState } from "react";

/** No YouTube connection until the visitor explicitly loads the player. */
export function YouTubeVideo({ id, title, start = 0 }: { id: string; title: string; start?: number }) {
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ""}`} title={title} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-secondary p-5 text-center text-foreground">
      <button type="button" onClick={() => setLoaded(true)} className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background" aria-label={`Load video: ${title}`}>Load video</button>
      <p className="text-xs">Loading connects to YouTube.</p>
      <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">Watch on YouTube</a>
    </div>
  );
}
