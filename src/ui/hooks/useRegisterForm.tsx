import { useState, useEffect } from "react";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

export function useRegisterForm() {
  const initialFormData: RegisterFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSecurityError, setPasswordSecurityError] = useState<
    string | null
  >(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isFormValid =
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.agreedToTerms &&
      !passwordError &&
      !passwordSecurityError;

    setIsButtonDisabled(!isFormValid);
  }, [formData, passwordError, passwordSecurityError]);

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "password" || field === "confirmPassword") {
      const otherField = field === "password" ? "confirmPassword" : "password";
      if (formData[otherField] && value !== formData[otherField]) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError(null);
      }
    }
  };

  const handlePasswordSecurityChange = (value: string) => {
    validatePasswordSecurity(value);
  };

  const validatePasswordSecurity = (password: string) => {
    const isSecure =
      password.length >= 8 &&
      /[A-Z]/.test(password) && // At least one uppercase letter
      /[a-z]/.test(password) && // At least one lowercase letter
      /[0-9]/.test(password) && // At least one number
      /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one symbol

    if (!isSecure) {
      setPasswordSecurityError(
        "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a symbol"
      );
    } else {
      setPasswordSecurityError(null);
    }
  };

  return {
    formData,
    passwordError,
    passwordSecurityError,
    isButtonDisabled,
    handleFormChange,
    handlePasswordSecurityChange,
  };
}
