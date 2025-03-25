import { supabase } from "../supabase/supabaseClient";
import { Habit } from "@/core/domain/Habit";

export class HabitRepository {
  static async getHabitsByUser(userId: string): Promise<Habit[]> {
    const { data, error } = await supabase
      .from("habits")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return data as Habit[];
  }

  static async createHabit(
    habit: Omit<Habit, "id" | "created_at">
  ): Promise<Habit> {
    const { data, error } = await supabase
      .from("habits")
      .insert([habit])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as Habit;
  }
}
