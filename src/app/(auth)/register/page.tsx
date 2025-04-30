"use client";
import { RegisterForm } from "@/ui/components/auth/RegisterForm/RegisterForm";
import { useRegisterForm } from "@/ui/hooks/useRegisterForm";
import { useCreateUser } from "@/ui/hooks/useCreateUser";
import { useStorageNavigation } from "@/ui/hooks/useStorageNavigation";

export default function Register() {
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
        onSubmit={handleSubmit}
      />

      {needsEmailVerification && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          A verification email has been sent to <strong>{email}</strong>.
        </div>
      )}
      {error && (
        <div className="text-center text-sm text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
    </main>
  );
}
