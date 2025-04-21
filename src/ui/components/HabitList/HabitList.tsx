"use client";
import { useHabits } from "@/ui/hooks/useHabit";

const HabitList = ({ userId }: { userId: string }) => {
  const { habits, loading } = useHabits(userId);

  //TODO: add skeleton
  if (loading) return <p>Cargando hábitos...</p>;

  return (
    <ul>
      {habits.map((habit) => (
        <li key={habit.id}>
          {habit.name} - {habit.frequency}
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
