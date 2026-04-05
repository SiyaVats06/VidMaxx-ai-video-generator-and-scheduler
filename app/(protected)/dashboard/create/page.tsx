"use client";

import { CreateFooter } from "@/components/create/CreateFooter";
import {
  CreateFormProvider,
  useCreateForm,
} from "@/components/create/CreateFormContext";
import { NicheSelection } from "@/components/create/NicheSelection";
import { Stepper } from "@/components/create/Stepper";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

// Future step components can be imported here
import { LanguageVoiceSelection } from "@/components/create/LanguageVoiceSelection";
import { BackgroundMusicSelection } from "@/components/create/BackgroundMusicSelection";
import { VideoStyleSelection } from "@/components/create/VideoStyleSelection";
import { CaptionStyleSelection } from "@/components/create/CaptionStyleSelection";
import { SeriesDetailsSelection } from "@/components/create/SeriesDetailsSelection";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function CreateFlowContent() {
  const { state } = useCreateForm();
  const [token, setToken] = useState<string | null>(null);
  const { userId, getToken } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken({ template: "supabase" });
      setToken(token);
    };
    fetchToken();
  }, []);
  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)]">
      {/* Header / Stepper Area */}
      <div className="w-full bg-background border-b sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <Stepper />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl relative">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out pb-24">
          {state.step === 1 && <NicheSelection />}
          {state.step === 2 && <LanguageVoiceSelection />}
          {state.step === 3 && <BackgroundMusicSelection />}
          {state.step === 4 && <VideoStyleSelection />}
          {state.step === 5 && <CaptionStyleSelection />}
          {state.step === 6 && <SeriesDetailsSelection />}
        </div>
      </div>

      {/* Fixed Footer Navigation */}
      <CreateFooter token={token} userId={userId} />
    </div>
  );
}

export default function CreateVideoPage() {
  return (
    <div className="flex h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <div className="flex-1 overflow-y-auto relative bg-transparent">
        <CreateFormProvider>
          <CreateFlowContent />
        </CreateFormProvider>
      </div>
    </div>
  );
}
