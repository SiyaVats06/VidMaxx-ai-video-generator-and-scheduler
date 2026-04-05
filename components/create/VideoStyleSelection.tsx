import React from "react";
import Image from "next/image";
import { useCreateForm } from "./CreateFormContext";
import { CheckCircle2, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const videoStyles = [
  { id: "realistic", name: "Realistic", image: "/video-style/realistic.png" },
  { id: "cinematic", name: "Cinematic", image: "/video-style/cinematic.png" },
  { id: "3d-render", name: "3D Render", image: "/video-style/3d-render.png" },
  { id: "anime", name: "Anime", image: "/video-style/anime.png" },
  { id: "cyberpunk", name: "Cyberpunk", image: "/video-style/cyberpunk.png" },
  { id: "gta", name: "GTA Style", image: "/video-style/gta.png" },
];

export function VideoStyleSelection() {
  const { state, setVideoStyle } = useCreateForm();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200 pb-4">
          Video Style
        </h2>
        <p className="text-zinc-500">
          Choose the visual aesthetic for your AI-generated video. Swipe horizontally to see all styles.
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 w-full pointer-events-auto">
          {videoStyles.map((style) => {
            const isSelected = state.videoStyle === style.id;

            return (
              <div
                key={style.id}
                onClick={() => setVideoStyle(style.id)}
                className={cn(
                  "snap-center shrink-0 cursor-pointer group relative overflow-visible transition-all duration-300 rounded-2xl bg-white",
                  "w-[240px] md:w-[280px]"
                )}
              >
                {/* Image Container with 9:16 Aspect Ratio */}
                <div
                  className={cn(
                    "relative w-full aspect-9/16 rounded-xl overflow-hidden border-2 transition-all duration-300",
                    isSelected
                      ? "border-indigo-600 shadow-md ring-4 ring-indigo-600/20"
                      : "border-zinc-200 group-hover:border-indigo-300 shadow-sm"
                  )}
                >
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Style Name Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white font-bold text-lg drop-shadow-md">
                      {style.name}
                    </span>
                  </div>
                </div>

                {/* Selection Indicator check */}
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-white rounded-full z-10 shadow-md">
                    <CheckCircle2 className="w-8 h-8 fill-indigo-600 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Horizontal scroll hint indicator (optional, but good for UX) */}
        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-zinc-400">
          <ImageIcon className="w-4 h-4" />
          <span>Scroll to explore more styles</span>
        </div>
      </div>
    </div>
  );
}
