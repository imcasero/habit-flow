import { HabitRepository } from "@/infra/repositories/HabitRepository";
import { Habit } from "@/core/domain/Habit";

export class GetHabits {
  static async execute(userId: string): Promise<Habit[]> {
    return await HabitRepository.getHabitsByUser(userId);
  }
}
