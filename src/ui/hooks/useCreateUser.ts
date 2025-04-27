"use client";
import { useState } from "react";
import { User } from "@/core/domain/dto/auth";
import { Session } from "@supabase/supabase-js";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (newUserData: User): Promise<Session | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const session = await response.json();
      return session;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading, error };
};
