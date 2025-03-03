"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-md border-2 border-gray-800 dark:border-gray-200 
         text-black dark:text-gray-200 transition-colors
         hover:border-gray-600 dark:hover:border-gray-400 bg-transparent"
    >
      {darkMode ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
