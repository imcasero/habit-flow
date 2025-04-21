export const RegisterForm = () => {
  return (
    <div className="max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-md pt-4 pb-8 px-4 flex flex-col gap-4 itemsp-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl font-medium">Register</h1>
        <p className="text-gray-700 dark:text-gray-400 text-center">
          Enter your credentials here to create your account in{" "}
          <span className="font-bold dark:text-white">HabitFlow</span>
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-0.5">
            Username
          </span>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-0.5">Email</span>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 dark:text-gray-400 px-0.5">
            Password
          </span>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-200"
          />
        </label>

        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
