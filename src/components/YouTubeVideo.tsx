import { useState } from "react";
import { Play } from "lucide-react";
import { publicPath } from "@/lib/public-path";

type VideoProps = { id: string; title: string; start?: number };

/** Reset playback when navigating to another video. */
export function YouTubeVideo(props: VideoProps) {
  return <YouTubePlayer key={`${props.id}:${props.start ?? 0}`} {...props} />;
}

/** Posters are served locally; only a visitor's click connects to YouTube. */
function YouTubePlayer({ id, title, start = 0 }: VideoProps) {
  const [loaded, setLoaded] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}`;
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      <div className="relative min-h-0 flex-1">
        {loaded ? (
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1${start ? `&start=${start}` : ""}`} title={title} referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" onLoad={(event) => event.currentTarget.focus()} allowFullScreen />
        ) : (
          <button type="button" onClick={() => setLoaded(true)} className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white" aria-label={`Play video: ${title}`}>
            {!posterFailed && <img ref={(element) => { if (element?.complete && element.naturalWidth === 0) setPosterFailed(true); }} src={publicPath(`/media/video-posters/${id}.jpg`)} alt="" width="480" height="360" loading="lazy" decoding="async" onError={() => setPosterFailed(true)} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100" />}
            <span className="relative flex items-center gap-2 rounded-full bg-black/90 px-5 py-3 text-sm font-semibold text-white shadow-lg"><Play className="size-5 fill-current" aria-hidden="true" /> Play video</span>
            {posterFailed && <span className="absolute inset-x-3 top-3 line-clamp-2 text-sm text-white">{title}</span>}
          </button>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 py-2 text-xs">
        <span>{loaded ? "Player provided by YouTube." : "Play connects to YouTube."}</span>
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Watch on YouTube</a>
      </div>
    </div>
  );
}
