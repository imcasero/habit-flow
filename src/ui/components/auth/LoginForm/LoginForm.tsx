import { Checkbox } from "@/ui/shared/components/Checkbox/Checbox";
import { Input } from "@/ui/shared/components/Input/Input";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4 itemsp-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl font-medium">Log in</h1>
        <p className="text-gray-700 dark:text-gray-400">
          Enter your credentials here to access the account
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <Input label="Email" type="email" placeholder="your@email.com" />
        <Input label="Password" type="password" placeholder="Password" />
        <Checkbox label="Remember me" />
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
