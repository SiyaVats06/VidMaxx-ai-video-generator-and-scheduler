import React from "react";
import { useCreateForm } from "./CreateFormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Clock, Camera, Play, Mail, Video, Info } from "lucide-react";

// Duration options
const durationOptions = [
  { id: "30-50", label: "30-50 secs", description: "Best for Shorts/Reels" },
  { id: "60-70", label: "60-70 secs", description: "For more in-depth content" },
];

// Platform options
const platformOptions = [
  { id: "TikTok", label: "TikTok", icon: Video },
  { id: "YouTube", label: "YouTube Shorts", icon: Play },
  { id: "Instagram", label: "Instagram Reels", icon: Camera },
  { id: "Email", label: "Email Campaign", icon: Mail },
];

export function SeriesDetailsSelection() {
  const { state, setSeriesName, setVideoDuration, togglePlatform, setPublishTime } = useCreateForm();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200 pb-4">
          Final Details & Scheduling
        </h2>
        <p className="text-zinc-500">
          Almost there! Name your series, choose your specs, and schedule when you want it to go live.
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Series Name */}
        <div className="space-y-3">
          <Label htmlFor="seriesName" className="text-base font-semibold">Series Name</Label>
          <Input 
            id="seriesName"
            placeholder="E.g., Daily Tech Tips" 
            value={state.seriesName}
            onChange={(e) => setSeriesName(e.target.value)}
            className="h-12 text-base"
          />
        </div>

        {/* Video Duration Grid */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Video Duration</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {durationOptions.map((opt) => (
              <div 
                key={opt.id}
                onClick={() => setVideoDuration(opt.id)}
                className={cn(
                  "cursor-pointer border-2 rounded-xl p-4 transition-all duration-200 flex flex-col gap-1",
                  state.videoDuration === opt.id 
                    ? "border-indigo-600 bg-indigo-50/50 shadow-sm" 
                    : "border-zinc-200 hover:border-indigo-300 hover:bg-zinc-50"
               )}
              >
                <div className="font-semibold text-zinc-900">{opt.label}</div>
                <div className="text-sm text-zinc-500">{opt.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Platforms (Select multiple)</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platformOptions.map((plat) => {
              const Icon = plat.icon;
              const isSelected = (state.platforms || []).includes(plat.id);
              return (
                <div
                  key={plat.id}
                  onClick={() => togglePlatform(plat.id)}
                  className={cn(
                    "cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-200 text-center",
                    isSelected
                      ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 shadow-sm"
                      : "border-zinc-200 text-zinc-600 hover:border-indigo-300 hover:bg-zinc-50"
                  )}
                >
                  <Icon className={cn("w-6 h-6", isSelected ? "text-indigo-600" : "text-zinc-500")} />
                  <span className="text-sm font-medium">{plat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Publishing Time */}
        <div className="space-y-3">
          <Label htmlFor="publishTime" className="text-base font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4" /> 
            Time to Publish
          </Label>
          <Input 
            id="publishTime"
            type="datetime-local" 
            value={state.publishTime}
            onChange={(e) => setPublishTime(e.target.value)}
            className="h-12 w-full sm:w-auto min-w-[250px] text-base custom-datetime-picker"
          />
          <div className="flex items-start gap-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200 mt-2">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Note:</strong> Video will generate 3–6 hours before video publish time to ensure it is ready on schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
