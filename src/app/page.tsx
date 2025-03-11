import { ThemeToggle } from "@/shared/components/ThemeToggle/ThemeToggle";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <ThemeToggle />
      <h3 className="text-black dark:text-white">Hola desde page</h3>
    </div>
  );
}
