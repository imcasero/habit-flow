export interface Habit {
  id: string;
  user_id: string;
  name: string;
  frequency: "Diario" | "Semanal" | "Mensual";
  created_at: string;
}
