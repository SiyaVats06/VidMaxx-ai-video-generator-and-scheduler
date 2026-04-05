"use client";

import React, { useMemo } from "react";
import { useCreateForm } from "./CreateFormContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play, CheckCircle2, User, Volume2 } from "lucide-react";
import { Language, DeepGramVoices, FonadaLabVoices } from "@/constants/language";

export function LanguageVoiceSelection() {
  const { state, setLanguage, setVoice } = useCreateForm();

  // Find the selected language object
  const selectedLangObj = useMemo(() => {
    return Language.find((l) => l.language === state.language) || Language[0];
  }, [state.language]);

  // Determine which voices to show based on the model of the selected language
  const availableVoices = useMemo(() => {
    if (selectedLangObj.modelName === "deepgram") {
      return DeepGramVoices;
    } else if (selectedLangObj.modelName === "fonadalab") {
      return FonadaLabVoices;
    }
    return [];
  }, [selectedLangObj.modelName]);

  const handlePlayPreview = (voiceUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Currently, preview URLs are empty strings in the constants.
    // In a real scenario, we'd play the audio.
    if (voiceUrl) {
      const audio = new Audio(voiceUrl);
      audio.play().catch((err) => console.error("Error playing audio", err));
    } else {
      console.log("No preview URL available for this voice.");
      // Could show a toast here if sonner was imported.
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200 pb-4">
          Language & Voice
        </h2>
        <p className="text-zinc-500">
          Select the language for your video and choose a natural-sounding AI voice.
        </p>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-zinc-700">Video Language</label>
        <Select
          value={state.language}
          onValueChange={(val) => setLanguage(val || "")}
        >
          <SelectTrigger className="w-full md:w-[400px] h-12 bg-white border-zinc-200 focus:ring-indigo-500 rounded-xl transition-all shadow-sm">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {Language.map((lang) => (
              <SelectItem key={lang.language} value={lang.language} className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{lang.countryFlag}</span>
                  <span>{lang.language}</span>
                  <span className="text-zinc-400 text-xs ml-2">({lang.countryCode})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-zinc-700 block">
            Select Voice <span className="text-zinc-400 ml-1">({availableVoices.length} available)</span>
          </label>
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
            {selectedLangObj.modelName === "deepgram" ? "DeepGram Model" : "FonadaLab Model"}
          </Badge>
        </div>

        <ScrollArea className="h-[400px] w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableVoices.map((v) => {
              const isSelected = state.voice === v.modelName;
              return (
                <Card
                  key={v.modelName}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md border-2
                    ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-50/30"
                        : "border-transparent bg-white hover:border-zinc-300"
                    }`}
                  onClick={() => setVoice(v.modelName)}
                >
                  <div className="p-4 flex items-center gap-4">
                    {/* Avatar / Icon */}
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                      ${isSelected ? "bg-indigo-100 text-indigo-600" : "bg-zinc-100 text-zinc-500"}
                    `}>
                      <User size={24} />
                    </div>

                    {/* Voice Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-zinc-900 truncate capitalize">
                          {v.modelName.replace(/-/g, " ")}
                        </h4>
                        {isSelected && (
                          <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="capitalize flex items-center gap-1">
                           {v.gender}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                        <span className="capitalize">{v.model}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`shrink-0 rounded-full h-10 w-10 transition-colors ${
                        isSelected ? "hover:bg-indigo-100 hover:text-indigo-700" : "hover:bg-zinc-100"
                      }`}
                      onClick={(e) => handlePlayPreview(v.preview, e)}
                      title="Play preview"
                    >
                      <Volume2 size={18} className={isSelected ? "text-indigo-600" : "text-zinc-400"} />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
