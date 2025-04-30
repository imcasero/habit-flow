"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-14 h-8" />;
  }

  return (
    <div className="flex items-center space-x-2 py-2">
      <Sun className="w-5 h-5 text-gray-800 dark:text-gray-400" />

      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="relative w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
      >
        <span
          className={`w-3 h-3 bg-white rounded-full shadow-md transition-transform ${
            resolvedTheme === "dark" ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      <Moon className="w-5 h-5 text-gray-800 dark:text-gray-400" />
    </div>
  );
};
