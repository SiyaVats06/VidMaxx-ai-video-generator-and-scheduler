"use client";

import { useCreateForm, NicheType } from "./CreateFormContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Ghost,
  Lightbulb,
  MoonStar,
  Landmark,
  Bot,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const availableNiches = [
  {
    id: "scary-stories",
    title: "Scary Stories",
    description: "Chilling tales and urban legends.",
    icon: Ghost,
    color: "text-red-500",
  },
  {
    id: "motivational",
    title: "Motivational",
    description: "Boost productivity and mindset.",
    icon: Lightbulb,
    color: "text-amber-500",
  },
  {
    id: "interesting-facts",
    title: "Interesting Facts",
    description: "Mind-blowing trivia tidbits.",
    icon: MoonStar,
    color: "text-blue-500",
  },
  {
    id: "health-fitness",
    title: "Health & Fitness",
    description: "Quick tips for better lifestyle.",
    icon: Landmark,
    color: "text-emerald-500",
  },
  {
    id: "tech-news",
    title: "Tech News",
    description: "Latest updates from tech world.",
    icon: Bot,
    color: "text-purple-500",
  },
  {
    id: "finance-tips",
    title: "Finance Tips",
    description: "Smart money management advice.",
    icon: TrendingUp,
    color: "text-green-500",
  },
];

export function NicheSelection() {
  const { state, setNicheType, setNiche, setCustomNiche } = useCreateForm();

  return (
    <div className="w-full max-w-4xl space-y-8 px-4 md:px-0">
      <Tabs
        value={state.nicheType}
        onValueChange={(val) => setNicheType(val as NicheType)}
        className="w-full"
      >
        {/* Tab Switcher rounded pill design */}
        <TabsList className="flex w-fit bg-gray-100/80 p-1.5 rounded-full mb-8 h-auto">
          <TabsTrigger
            value="available"
            className="text-[13px] px-6 py-2 font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm rounded-full text-zinc-500"
          >
            Available Niche
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="text-[13px] px-6 py-2 font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm rounded-full text-zinc-500"
          >
            Custom Niche
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="available"
          className="focus-visible:outline-none focus-visible:ring-0 mt-0"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {availableNiches.map((niche) => {
              const isSelected = state.niche === niche.id;
              const Icon = niche.icon;

              return (
                <Card
                  key={niche.id}
                  onClick={() => setNiche(niche.id)}
                  className={cn(
                    "cursor-pointer group relative overflow-visible transition-all duration-200 border bg-white min-h-[160px] flex flex-col pt-5 px-6 pb-5 rounded-xl",
                    isSelected
                      ? "border-indigo-600 shadow-sm ring-1 ring-indigo-600"
                      : "border-gray-200 hover:border-gray-300 shadow-sm",
                  )}
                >
                  <Icon className={cn("w-6 h-6 mb-6", niche.color)} />

                  <div className="mt-auto">
                    <h3 className="font-bold text-[14px] text-zinc-900 mb-2">
                      {niche.title}
                    </h3>
                    <p className="text-[12px] text-zinc-500 leading-relaxed font-medium">
                      {niche.description}
                    </p>
                  </div>

                  {/* Selection Indicator check */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 bg-white rounded-full">
                      <CheckCircle2 className="w-6 h-6 fill-indigo-600 text-white" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent
          value="custom"
          className="focus-visible:outline-none focus-visible:ring-0 mt-0"
        >
          <Card className="p-6 border border-gray-200 bg-white shadow-sm transition-colors rounded-xl">
            <div className="relative">
              <Textarea
                placeholder="Describe your niche in detail... e.g. A faceless channel about mysterious discoveries targeting late-night viewers."
                className="min-h-[220px] resize-none text-[14px] p-4 bg-gray-50/50 border-gray-200 focus-visible:ring-indigo-500/30 focus-visible:border-indigo-500"
                value={state.customNiche}
                onChange={(e) => setCustomNiche(e.target.value)}
                maxLength={500}
              />
              <div className="absolute bottom-3 right-3 text-[11px] text-zinc-400 font-medium px-2 py-1 rounded">
                {state.customNiche.length} / 500
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
