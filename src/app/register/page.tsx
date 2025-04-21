import { RegisterForm } from "@/ui/components/Forms/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2 py-2.5">
      <RegisterForm />
    </main>
  );
}
