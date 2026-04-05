"use client";

import { CreateFormState } from "@/components/create/CreateFormContext";
import { useSupabaseClient } from "@/lib/supabase/client";

export const createSeries = async (
  token: string | null,
  state: CreateFormState,
  userId: string | null | undefined,
) => {
  const { step, ...rest } = state;
  const supabase = await useSupabaseClient(token);
  const { data, error } = await supabase
    .from("seriesData")
    .insert({ ...rest, user_id: userId });
  if (error) {
    console.error("Error creating series:", error);
    return { error };
  }
  return { data };
};
