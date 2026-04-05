"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type NicheType = "available" | "custom";

export interface CreateFormState {
  step: number;
  nicheType: NicheType;
  niche: string;
  customNiche: string;
  language: string;
  voice: string;
  bgMusic: string[];
  videoStyle: string;
  captionStyle: string;
  seriesName: string;
  videoDuration: string;
  platforms: string[];
  publishTime: string;
}

interface CreateFormContextType {
  state: CreateFormState;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setNicheType: (type: NicheType) => void;
  setNiche: (niche: string) => void;
  setCustomNiche: (custom: string) => void;
  setLanguage: (lang: string) => void;
  setVoice: (voice: string) => void;
  setBgMusic: (music: string[]) => void;
  setVideoStyle: (style: string) => void;
  setCaptionStyle: (style: string) => void;
  setSeriesName: (name: string) => void;
  setVideoDuration: (duration: string) => void;
  togglePlatform: (platform: string) => void;
  setPublishTime: (time: string) => void;
}

const initialState: CreateFormState = {
  step: 1,
  nicheType: "custom",
  niche: "",
  customNiche: "",
  language: "English", // Default to English
  voice: "",
  bgMusic: [],
  videoStyle: "realistic", // Default style
  captionStyle: "youtuber", // Default caption style
  seriesName: "",
  videoDuration: "30-50", // Default to 30-50 seconds
  platforms: ["TikTok"], // Default platform
  publishTime: "", // Empty string means no scheduled time
};

const CreateFormContext = createContext<CreateFormContextType | undefined>(
  undefined,
);

export function CreateFormProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CreateFormState>(initialState);

  const setStep = (step: number) => setState((prev) => ({ ...prev, step }));

  const nextStep = () => {
    setState((prev) => ({
      ...prev,
      step: Math.min(prev.step + 1, 6), // 6 total steps
    }));
  };

  const prevStep = () => {
    setState((prev) => ({
      ...prev,
      step: Math.max(prev.step - 1, 1),
    }));
  };

  const setNicheType = (nicheType: NicheType) =>
    setState((prev) => ({ ...prev, nicheType }));

  const setNiche = (niche: string) => setState((prev) => ({ ...prev, niche }));

  const setCustomNiche = (customNiche: string) =>
    setState((prev) => ({ ...prev, customNiche }));

  const setLanguage = (language: string) =>
    setState((prev) => ({ ...prev, language, voice: "" })); // Reset voice when language changes

  const setVoice = (voice: string) => setState((prev) => ({ ...prev, voice }));

  const setBgMusic = (bgMusic: string[]) =>
    setState((prev) => ({ ...prev, bgMusic }));

  const setVideoStyle = (videoStyle: string) =>
    setState((prev) => ({ ...prev, videoStyle }));

  const setCaptionStyle = (captionStyle: string) =>
    setState((prev) => ({ ...prev, captionStyle }));

  const setSeriesName = (seriesName: string) =>
    setState((prev) => ({ ...prev, seriesName }));

  const setVideoDuration = (videoDuration: string) =>
    setState((prev) => ({ ...prev, videoDuration }));

  const togglePlatform = (platform: string) =>
    setState((prev) => {
      const currentPlatforms = Array.isArray(prev.platforms)
        ? prev.platforms
        : (prev as any).platform
          ? [(prev as any).platform]
          : [];
      const isSelected = currentPlatforms.includes(platform);
      return {
        ...prev,
        platforms: isSelected
          ? currentPlatforms.filter((p) => p !== platform)
          : [...currentPlatforms, platform],
      };
    });

  const setPublishTime = (publishTime: string) =>
    setState((prev) => ({ ...prev, publishTime }));

  return (
    <CreateFormContext.Provider
      value={{
        state,
        setStep,
        nextStep,
        prevStep,
        setNicheType,
        setNiche,
        setCustomNiche,
        setLanguage,
        setVoice,
        setBgMusic,
        setVideoStyle,
        setCaptionStyle,
        setSeriesName,
        setVideoDuration,
        togglePlatform,
        setPublishTime,
      }}
    >
      {children}
    </CreateFormContext.Provider>
  );
}

export function useCreateForm() {
  const context = useContext(CreateFormContext);
  if (context === undefined) {
    throw new Error("useCreateForm must be used within a CreateFormProvider");
  }
  return context;
}
