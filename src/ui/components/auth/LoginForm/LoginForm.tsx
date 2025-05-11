"use client";
import { useLoginUser } from "@/ui/hooks/useLoginUser";
import { Checkbox } from "@/ui/shared/components/Checkbox/Checbox";
import { Input } from "@/ui/shared/components/Input/Input";
import Link from "next/link";
import { useState } from "react";

export const LoginForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    loginUser();
    if (error) {
      console.error("Error logging in:", error);
    }
    if (user) {
      console.log("User logged in successfully:", user);
    }
  };

  return (
    <div className="max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4 itemsp-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl font-medium">Log in</h1>
        <p className="text-gray-700 dark:text-gray-400">
          Enter your credentials here to access the account
        </p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Log in
        </button>
      </form>
      <p className="text-center text-gray-700 dark:text-gray-400">
        Dont have an account?{" "}
        <Link href="/register" className="text-gray-500 hover:underline">
          Sing up here
        </Link>
      </p>
    </div>
  );
};
