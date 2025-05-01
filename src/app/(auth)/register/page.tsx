"use client";
import { RegisterForm } from "@/ui/components/auth/RegisterForm/RegisterForm";
import { useRegisterForm } from "@/ui/hooks/useRegisterForm";
import { useCreateUser } from "@/ui/hooks/useCreateUser";
import { useStorageNavigation } from "@/ui/hooks/useStorageNavigation";
import { toast } from "@pheralb/toast";
import { useEffect, useMemo } from "react";
import { useTheme } from "next-themes";

export default function Register() {
  const { resolvedTheme } = useTheme();
  const theme = useMemo(
    () => (resolvedTheme === "dark" ? "dark" : "light"),
    [resolvedTheme]
  );

  const {
    formData,
    passwordError,
    isButtonDisabled,
    handleFormChange,
    handlePasswordChange,
    handlePasswordSecurityChange,
    passwordSecurityError,
  } = useRegisterForm();

  const { createUser, error, needsEmailVerification, email } = useCreateUser();
  useStorageNavigation("/dashboard", "auth-event");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser({
      email: formData.email,
      password: formData.password,
    });
  };
  useEffect(() => {
    if (error) {
      toast.error({
        text: error,
        theme: theme,
      });
    }
    if (needsEmailVerification) {
      toast.success({
        text: `A verification email has been sent.`,
        description: "Please check your inbox and verify your email address.",
        icon: "📧",
        delayDuration: 8000,
        theme: theme,
      });
    }
  }, [error, needsEmailVerification, email]);

  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2 py-2.5">
      <RegisterForm
        formData={formData}
        passwordError={passwordError}
        isButtonDisabled={isButtonDisabled}
        onFormChange={handleFormChange}
        onPasswordChange={handlePasswordChange}
        onPasswordSecurityChange={handlePasswordSecurityChange}
        passwordSecurityError={passwordSecurityError}
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
      />
    </main>
  );
}
