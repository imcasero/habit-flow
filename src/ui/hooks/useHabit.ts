"use client";
import { useEffect, useState } from "react";
import { Habit } from "@/core/domain/Habit";

export const useHabits = (userId: string) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetch(`/api/habits?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  return { habits, loading };
};
