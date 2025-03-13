import { NavBar } from "@/shared/components/Navbar/Navbar";

export default function Page() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2">
      <NavBar />

      <h3 className="text-black dark:text-white">Hola desde page</h3>
    </main>
  );
}
