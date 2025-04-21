import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2">
      <h3>Landing page</h3>
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/login">Go to Login</Link>
      <Link href="/register">Go to Register</Link>
    </main>
  );
}
