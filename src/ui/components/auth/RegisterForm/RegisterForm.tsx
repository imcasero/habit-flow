import Link from "next/link";
import { Input } from "../../../shared/components/Input/Input";
import { Checkbox } from "../../../shared/components/Checkbox/Checbox";

interface RegisterFormProps {
  formData: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreedToTerms: boolean;
  };
  passwordError: string | null;
  isButtonDisabled: boolean;
  onFormChange: (field: string, value: string | boolean) => void;
  onPasswordSecurityChange: (value: string) => void;
  passwordSecurityError?: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export const RegisterForm = ({
  formData,
  passwordError,
  isButtonDisabled,
  onFormChange,
  onPasswordSecurityChange,
  passwordSecurityError,
  onSubmit,
}: RegisterFormProps) => {
  return (
    <div className="max-w-md w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-medium">Register</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <Input
          label="Username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => onFormChange("username", e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => onFormChange("email", e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            onPasswordSecurityChange(e.target.value);
            onFormChange("password", e.target.value);
          }}
          error={passwordSecurityError ?? undefined}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => onFormChange("confirmPassword", e.target.value)}
          error={passwordError ?? undefined}
        />

        <Checkbox
          checked={formData.agreedToTerms}
          onChange={(e) => onFormChange("agreedToTerms", e.target.checked)}
          label="By registering, you agree to the use of your data only to run the app, with no commercial use."
        />

        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-200 cursor-pointer ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed bg-gray-400 dark:bg-gray-600"
              : ""
          }`}
          disabled={isButtonDisabled}
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-gray-700 dark:text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-gray-500 hover:underline">
          Log in here
        </Link>
      </p>
    </div>
  );
};
