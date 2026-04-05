import React from "react";
import { useCreateForm } from "./CreateFormContext";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { captionStyleComponents } from "@/components/captions/CaptionStyles";

const captionStylesList = [
  { id: "youtuber", name: "Youtuber" },
  { id: "karaoke", name: "Karaoke" },
  { id: "neon", name: "Neon" },
  { id: "typewriter", name: "Typewriter" },
  { id: "pop", name: "Pop" },
  { id: "minimalist", name: "Minimalist" },
];

export function CaptionStyleSelection() {
  const { state, setCaptionStyle } = useCreateForm();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200 pb-4">
          Caption Style
        </h2>
        <p className="text-zinc-500">
          Choose the animated text style for your video captions. Select one below to see it in action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {captionStylesList.map((style) => {
          const isSelected = state.captionStyle === style.id;
          const PreviewComponent = captionStyleComponents[style.id];

          return (
            <div
              key={style.id}
              onClick={() => setCaptionStyle(style.id)}
              className={cn(
                "relative flex flex-col cursor-pointer group transition-all duration-300 rounded-2xl bg-zinc-900 border-2 overflow-hidden",
                isSelected
                  ? "border-indigo-600 shadow-md ring-4 ring-indigo-600/20"
                  : "border-zinc-800 hover:border-zinc-600 shadow-sm"
              )}
            >
              {/* Preview Container fixed height */}
              <div className="relative w-full h-40 flex items-center justify-center p-4">
                {PreviewComponent ? (
                  <PreviewComponent text="Preview Caption" />
                ) : (
                  <span className="text-white">Style not found</span>
                )}
              </div>

              {/* Style Name Label */}
              <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-100 font-semibold text-lg">
                  {style.name}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-6 h-6 fill-indigo-600 text-white" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
