"use client";
import Link from "next/link";
import { Input } from "../Input/Input";
import { useState } from "react";
import { Checkbox } from "../Checkbox/Checbox";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-medium">Register</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
        />

        <Checkbox
          checked={formData.agreedToTerms}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              agreedToTerms: e.target.checked,
            }))
          }
          label="By registering, you agree to the use of your data only to run the app, with no commercial use."
        />

        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
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
