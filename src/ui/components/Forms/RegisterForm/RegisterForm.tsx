import Link from "next/link";

export const RegisterForm = () => {
  return (
    <div className="max-w-md w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4 itemsp-center ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-medium">Register</h1>
      </div>
      <form className="flex flex-col gap-5">
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-1">
            Username
          </span>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-1">Email</span>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-1">
            Password
          </span>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-1">
            Confirm Password
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
          <span className="text-gray-700 dark:text-gray-400">
            By registering, you agree to the use of your data only to run the
            app, with no commercial use.
          </span>
        </label>
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
