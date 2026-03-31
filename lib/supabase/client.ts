// lib/supabase/server.ts
import { createClient } from "@supabase/supabase-js";
// import { useAuth } from "@clerk/nextjs";

// export async function useSupabaseClient() {
//   // const { userId, getToken } = useAuth();
//   // const token = await getToken({ template: "supabase" });
//   // console.log("userID", userId);

//   // console.log("clerk auth token", token);

//   return createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       global: {
//         headers: {
//           apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // ← add this
//           Authorization: token
//             ? `Bearer ${token}`
//             : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
//         },
//       },
//     },
//   );
// }
