"use client";
import { useState } from "react";
import { User } from "@/core/domain/dto/auth";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/infra/supabase/supabaseClient";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needsEmailVerification, setNeedsEmailVerification] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  const createUser = async (newUserData: User): Promise<Session | null> => {
    setLoading(true);
    setError(null);
    setNeedsEmailVerification(false);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: newUserData.email,
        password: newUserData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (signUpError) {
        throw new Error(signUpError.message);
      }

      if (!data.session) {
        setNeedsEmailVerification(true);
        setEmail(newUserData.email);
        return null;
      }

      return data.session;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error, needsEmailVerification, email };
};
