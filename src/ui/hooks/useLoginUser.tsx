import { AuthCredentials } from "@/core/auth/domain/types";
import { SupabaseAuthRepository } from "@/infra/auth/SupabaseAuthRepository";
import { User } from "@supabase/supabase-js";
import { useState } from "react";

export const useLoginUser = (userData: Omit<AuthCredentials, "username">) => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const loginUser = async () => {
    try {
      const userResponse = await SupabaseAuthRepository.loginUser(userData);
      setUser(userResponse);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      return null;
    }
  };

  return { loginUser, error, user };
};
