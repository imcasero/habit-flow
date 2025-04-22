"use client";
import { useEffect, useState } from "react";
import { Habit } from "@/core/domain/Habit";
import { RegisterUserDTO } from "@/core/domain/dto/auth";

export const useCreateUser = (newUserData: RegisterUserDTO) => {
  const [userData, setUserData] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!newUserData) return;

    fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [newUserData]);

  return { userData, loading };
};
