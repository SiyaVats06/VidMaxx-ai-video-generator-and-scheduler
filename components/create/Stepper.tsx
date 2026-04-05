"use client";

import { useCreateForm } from "./CreateFormContext";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 6;

export function Stepper() {
  const { state } = useCreateForm();
  
  return (
    <div className="w-full py-8 mb-4">
      <div className="flex flex-col max-w-4xl mx-auto gap-3 px-4 md:px-0">
        <div className="flex flex-col gap-2">
          {/* Step Indicator Text */}
          <h3 className="text-[12px] font-bold text-indigo-600 tracking-wider uppercase">
            Step {state.step} of {TOTAL_STEPS}
          </h3>
          
          {/* Progress Bars */}
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
              const stepNumber = i + 1;
              const isActive = state.step >= stepNumber;
              return (
                <div 
                  key={stepNumber}
                  className={cn(
                    "flex-1 h-1.5 rounded-full transition-colors duration-300",
                    isActive ? "bg-indigo-600" : "bg-gray-100"
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
