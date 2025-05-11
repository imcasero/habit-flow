import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

let supabaseAuthClient: SupabaseClient | null = null;

/**
 * Retrieves a Supabase client instance. If an access token is provided,
 * it creates or reuses a client with the token included in the authorization headers.
 * Otherwise, it returns a default Supabase client.
 *
 * @param accessToken - Optional access token to authenticate the Supabase client.
 * @returns A SupabaseClient instance configured with or without the provided access token.
 */
export const getSupabaseClient = (accessToken?: string): SupabaseClient => {
  if (accessToken) {
    if (!supabaseAuthClient) {
      supabaseAuthClient = createClient(supabaseUrl, supabaseAnonKey, {
        global: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
    }
    return supabaseAuthClient;
  }

  return supabase;
};
