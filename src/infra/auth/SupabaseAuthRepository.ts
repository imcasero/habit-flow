import { AuthCredentials } from "@/core/auth/domain/types";
import { supabase } from "../supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";

export class SupabaseAuthRepository {
  static async registerUser(newUserData: AuthCredentials): Promise<Session> {
    const { data, error } = await supabase.auth.signUp({
      email: newUserData.email,
      password: newUserData.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          username: newUserData.username,
        },
      },
    });

    if (error) throw new Error(error.message);
    //TODO: review this for dont throw an error if the email is not verified
    if (!data.session) throw new Error("Email verification required");
    return data.session;
  }

  static async loginUser(
    userData: Omit<AuthCredentials, "username">
  ): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword(userData);

    if (error) throw new Error(error.message);
  }
}
