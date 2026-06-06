"use client";
import { useState } from "react";
import Image from "next/image";
import { DanceVideo } from "../../dance-data";
import VideoModal from "./videomodal";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

const sortedVideos = (videos: DanceVideo[]) =>
  [...videos].sort((a, b) => {
    const dateDiff = (b.date ?? "").localeCompare(a.date ?? "");
    if (dateDiff !== 0) return dateDiff;
    return (a.title ?? "").localeCompare(b.title ?? "");
  });

const VideoGrid = ({ videos }: { videos: DanceVideo[] }) => {
  const sorted = sortedVideos(videos);
  const [active, setActive] = useState<{ id: string; title: string } | null>(null);

  if (videos.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-slate-500 text-sm">
        No videos added yet — drop YouTube links into dance-data.ts
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((video, i) => {
          const id = getYouTubeId(video.url);
          if (!id) return null;
          const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

          return (
            <div key={i} className="flex flex-col gap-2">
              <button
                onClick={() => setActive({ id, title: video.title })}
                className="group relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Image
                  src={thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-opacity duration-200 group-hover:opacity-70"
                  unoptimized
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M6.5 4.5l10 5.5-10 5.5V4.5z" />
                    </svg>
                  </div>
                </div>
              </button>

              <div>
                <p className="text-slate-200 font-medium text-sm">{video.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  {video.style && (
                    <span className="bg-sky-400/20 px-2 py-0.5 rounded-full text-sky-400 font-medium text-xs">
                      {video.style}
                    </span>
                  )}
                  {video.date && (
                    <span className="text-slate-500 text-xs">{video.date}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <VideoModal
          videoId={active.id}
          title={active.title}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
};

export default VideoGrid;
