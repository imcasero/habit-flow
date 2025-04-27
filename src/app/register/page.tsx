"use client";
import { RegisterForm } from "@/ui/components/Forms/RegisterForm/RegisterForm";
import { useState, useEffect } from "react";
import { useCreateUser } from "@/ui/hooks/useCreateUser";

export default function Register() {
  const { createUser, loading, error } = useCreateUser();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isFormValid =
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.agreedToTerms &&
      !passwordError;

    setIsButtonDisabled(!isFormValid);
  }, [formData, passwordError]);

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, confirmPassword: value }));
    if (formData.password && value !== formData.password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const session = await createUser({
      email: formData.email,
      password: formData.password,
    });
    console.log("Session:", session);
    if (session) {
      alert(session);
    }
  };

  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2 py-2.5">
      <RegisterForm
        formData={formData}
        passwordError={passwordError}
        isButtonDisabled={isButtonDisabled}
        onFormChange={handleFormChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
