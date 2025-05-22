"use client";
import { LoginForm } from "@/ui/components/auth/LoginForm/LoginForm";
import { useLoginUser } from "@/ui/hooks/useLoginUser";
import { toast } from "@pheralb/toast";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation"; // ✅ CORRECTO para app/

export default function Login() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const theme = useMemo(
    () => (resolvedTheme === "dark" ? "dark" : "light"),
    [resolvedTheme]
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { loginUser, error, user } = useLoginUser({
    email: formData.email,
    password: formData.password,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser();
  };

  useEffect(() => {
    if (error) {
      toast.error({ text: error, theme });
    }
    if (user) {
      const sessionData = localStorage.getItem(
        "sb-jioiwpygfezsjcdojhcq-auth-token"
      );

      if (sessionData) {
        fetch("/api/auth/set-session-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: sessionData,
        });
      }

      console.log("User logged in:", user);
      router.push("/dashboard");
    }
  }, [error, user, theme]);

  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-4 pt-8">
      <LoginForm
        formData={formData}
        onFormChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
