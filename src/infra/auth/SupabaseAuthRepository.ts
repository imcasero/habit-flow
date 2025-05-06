import { AuthCredentials } from "@/core/auth/domain/types";
import { supabase } from "../supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";

export class SupabaseAuthRepository {
  static async registerUser(newUserData: AuthCredentials): Promise<Session> {
    const { data, error } = await supabase.auth.signUp({
      email: newUserData.email,
      password: newUserData.password,
    });
    if (error) throw new Error(error.message);
    if (!data.session) throw new Error("Session is null");
    return data.session;
  }

  static async loginUser(userData: AuthCredentials): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword(userData);

    if (error) throw new Error(error.message);
  }
}
