import { User } from "@/core/domain/dto/auth";
import { supabase } from "../supabase/supabaseClient";
import { Session } from "@supabase/supabase-js";

export class AuthRepository {
  static async registerUser(newUserData: User): Promise<Session> {
    const { data, error } = await supabase.auth.signUp({
      email: newUserData.email,
      password: newUserData.password,
    });
    if (error) throw new Error(error.message);
    if (!data.session) throw new Error("Session is null");
    return data.session;
  }

  static async loginUser(userData: User): Promise<void> {
    const { data, error } = await supabase.auth.signInWithPassword(userData);

    if (error) throw new Error(error.message);
  }
}
