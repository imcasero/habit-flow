"use client";
import { useLoginUser } from "@/ui/hooks/useLoginUser";
import { Checkbox } from "@/ui/shared/components/Checkbox/Checbox";
import { Input } from "@/ui/shared/components/Input/Input";
import Link from "next/link";
import { useState } from "react";

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
    rememberMe: boolean;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const LoginForm = ({
  formData,
  onFormChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <div className="max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl font-medium">Log in</h1>
        <p className="text-gray-700 dark:text-gray-400">
          Enter your credentials here to access the account
        </p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={onFormChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onFormChange}
        />
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={onFormChange}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Log in
        </button>
      </form>
      <p className="text-center text-gray-700 dark:text-gray-400">
        Don't have an account?{" "}
        <Link href="/register" className="text-gray-500 hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
};
