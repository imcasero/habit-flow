"use client";
import { useState } from "react";
import { Session } from "@supabase/supabase-js";
import { AuthCredentials } from "@/core/auth/domain/types";
import { SupabaseAuthRepository } from "@/infra/auth/SupabaseAuthRepository";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needsEmailVerification, setNeedsEmailVerification] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  const createUser = async (
    newUserData: AuthCredentials
  ): Promise<Session | null> => {
    setLoading(true);
    setError(null);
    setNeedsEmailVerification(false);

    try {
      const session = await SupabaseAuthRepository.registerUser(newUserData);
      return session;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");

      if (err instanceof Error && err.message.includes("email")) {
        setNeedsEmailVerification(true);
        setEmail(newUserData.email);
      }

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, needsEmailVerification, email };
};
