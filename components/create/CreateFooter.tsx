"use client";

import { createSeries } from "@/actions/series";
import { useCreateForm } from "./CreateFormContext";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export function CreateFooter({
  token,
  userId,
}: {
  token: string | null;
  userId: string | null | undefined;
}) {
  const { state, nextStep, prevStep } = useCreateForm();

  const canContinue = () => {
    if (state.step === 1) {
      if (state.nicheType === "available" && !state.niche) return false;
      if (state.nicheType === "custom" && !state.customNiche.trim())
        return false;
    }
    return true;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 ml-[228px]">
      <div className="container mx-auto max-w-4xl px-4 py-4 md:py-4 flex justify-end">
        <div className="flex items-center gap-3 w-full justify-between">
          <div className="w-[80px]">
            {state.step > 1 && (
              <Button
                variant="outline"
                size="default"
                onClick={prevStep}
                className="text-zinc-600 border-gray-200 hover:bg-gray-50"
              >
                Back
              </Button>
            )}
          </div>

          {state.step < 6 ? (
            <Button
              variant="default"
              size="default"
              onClick={nextStep}
              disabled={!canContinue()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-[10px] px-8 h-10 text-[14px] font-medium shadow-sm transition-all flex items-center gap-1"
            >
              Continue <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="default"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-[10px] px-8 h-10 text-[14px] font-medium shadow-sm transition-all"
              disabled={!canContinue()}
              onClick={() => {
                createSeries(token, state, userId);
                // TODO: Perform generation logic
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
