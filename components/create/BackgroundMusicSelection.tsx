import React, { useState, useRef, useEffect } from "react";
import { useCreateForm } from "./CreateFormContext";
import { Check, Music, Play, Square, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const bgMusicOptions = [
  {
    id: "bg_1",
    name: "Instagram Reels Marketing (1)",
    url: "https://ik.imagekit.io/Tubeguruji/BgMusic/instagram-reels-marketing-music-469052.mp3",
    duration: "1:20",
  },
  {
    id: "bg_2",
    name: "Trending Instagram Reels",
    url: "https://ik.imagekit.io/Tubeguruji/BgMusic/trending-instagram-reels-music-447249.mp3",
    duration: "2:05",
  },
  {
    id: "bg_3",
    name: "Instagram Reels Marketing (2)",
    url: "https://ik.imagekit.io/Tubeguruji/BgMusic/instagram-reels-marketing-music-384448.mp3",
    duration: "1:45",
  },
  {
    id: "bg_4",
    name: "Basketball Reels Music",
    url: "https://ik.imagekit.io/Tubeguruji/BgMusic/basketball-instagram-reels-music-461852.mp3",
    duration: "1:30",
  },
  {
    id: "bg_5",
    name: "Dramatic Hip Hop & Jazz",
    url: "https://ik.imagekit.io/Tubeguruji/BgMusic/dramatic-hip-hop-music-background-jazz-music-for-short-video-148505.mp3",
    duration: "2:15",
  },
];

export function BackgroundMusicSelection() {
  const { state, setBgMusic } = useCreateForm();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handleTogglePlay = (id: string, url: string) => {
    if (playingId === id) {
      // Pause
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      // Play new
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(url);
      newAudio.onended = () => setPlayingId(null);
      newAudio.play();
      audioRef.current = newAudio;
      setPlayingId(id);
    }
  };

  const handleToggleSelection = (url: string) => {
    const currentSelection = [...state.bgMusic];
    if (currentSelection.includes(url)) {
      setBgMusic(currentSelection.filter((m) => m !== url));
    } else {
      setBgMusic([...currentSelection, url]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200 pb-4">
          Background Music
        </h2>
        <p className="text-zinc-500">
          Reels with catchy music are 5x more likely to go viral. Select one or more tracks.
        </p>
      </div>

      <div className="border border-zinc-200 bg-white rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-[1fr_auto_auto] items-center p-4 bg-zinc-50 border-b border-zinc-200 text-sm font-semibold text-zinc-600">
          <div>Track Name</div>
          <div className="w-24 text-center">Duration</div>
          <div className="w-16 text-right">Select</div>
        </div>

        <div className="divide-y divide-zinc-100 bg-white">
          {bgMusicOptions.map((music) => {
            const isSelected = state.bgMusic.includes(music.url);
            const isPlaying = playingId === music.id;

            return (
              <div
                key={music.id}
                className={cn(
                  "grid grid-cols-[1fr_auto_auto] items-center p-4 transition-colors hover:bg-zinc-50 group",
                  isSelected && "bg-indigo-50/50 hover:bg-indigo-50"
                )}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleTogglePlay(music.id, music.url)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
                      isPlaying
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                    )}
                  >
                    {isPlaying ? (
                      <Square className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "font-medium transition-colors",
                        isSelected || isPlaying ? "text-indigo-700" : "text-zinc-900"
                      )}
                    >
                      {music.name}
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Music className="w-3 h-3" /> Background Track
                    </span>
                  </div>
                  {isPlaying && (
                    <div className="hidden sm:flex items-center gap-1 ml-4 h-4">
                      <div className="w-1 h-3 bg-indigo-500 rounded-full animate-[bounce_1s_infinite_0s]"></div>
                      <div className="w-1 h-4 bg-indigo-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
                      <div className="w-1 h-2 bg-indigo-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
                      <div className="w-1 h-3 bg-indigo-500 rounded-full animate-[bounce_1s_infinite_0.6s]"></div>
                    </div>
                  )}
                </div>

                <div className="w-24 text-center text-sm text-zinc-500">
                  {music.duration}
                </div>

                <div className="w-16 flex justify-end">
                  <button
                    onClick={() => handleToggleSelection(music.url)}
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center transition-all border shrink-0",
                      isSelected
                        ? "bg-indigo-600 border-indigo-600 text-white"
                        : "bg-white border-zinc-300 text-transparent hover:border-zinc-400"
                    )}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex items-start gap-3 shadow-sm">
        <Volume2 className="w-5 h-5 text-indigo-600 mt-0.5" />
        <div className="text-sm">
          <p className="text-indigo-800 font-semibold pb-1">Multiple selections allowed</p>
          <p className="text-indigo-600/80 mt-1">
            You can select more than one track. The AI will optimally place them throughout your video.
          </p>
        </div>
      </div>
    </div>
  );
}
