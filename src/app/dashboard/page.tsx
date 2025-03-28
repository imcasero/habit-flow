import HabitList from "@/ui/components/HabitList/HabitList";

export default function Dashboard() {
  const userId = "5b3eaff1-1ffe-4122-8df1-c50a09e6a4fd";

  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center gap-2">
      <h1>Mis Hábitos</h1>
      <HabitList userId={userId} />
    </div>
  );
}
