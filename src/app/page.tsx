import { ThemeToggle } from "@/shared/components/ThemeToggle/ThemeToggle";

export default function Page() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col justify-center items-center p-4 gap-2">
      <ThemeToggle />
      <h3 className="text-black dark:text-white">Hola desde page</h3>
    </main>
  );
}
