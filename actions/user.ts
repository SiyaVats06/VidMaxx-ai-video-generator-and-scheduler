import { supabaseAdmin } from "@/lib/supabase/server";

export async function syncUser(
  eventType: string,
  userId: string | undefined,
  userData: any,
) {
  try {
    if (eventType === "user.created") {
      const { data, error } = await supabaseAdmin.from("users").insert({
        user_id: userId,
        name: userData.first_name,
        email: userData.email_addresses[0].email_address,
      });
      if (error) {
        console.log("Error syncing user", error);
        return { error: error.message };
      }
    } else if (eventType === "user.deleted") {
      const { data, error } = await supabaseAdmin
        .from("users")
        .delete()
        .eq("user_id", userId);
      if (error) {
        console.log("Error syncing user", error);
        return { error: error.message };
      }
    }

    return { success: true };
  } catch (error) {
    console.log("Error syncing user", error);
    return { error: "Internal server error" };
  }
}
