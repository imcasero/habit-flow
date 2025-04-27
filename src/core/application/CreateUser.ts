import { AuthRepository } from "@/infra/repositories/AuthRepository";
import { User } from "../domain/dto/auth";
import { Session } from "@supabase/supabase-js";

export class CreateUser {
  static async execute(newUserData: User): Promise<Session> {
    return await AuthRepository.registerUser(newUserData);
  }
}
