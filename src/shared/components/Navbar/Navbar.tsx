import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-center w-full px-4 py-2 bg-transparent border-b-1 border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between w-[1024px]">
        <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Habit Flow
        </p>
        <ThemeToggle />
      </div>
    </nav>
  );
};
