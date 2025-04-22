import { AuthRepository } from "@/infra/repositories/AuthRepository";
import { RegisterUserDTO } from "../domain/dto/auth";
import { Session } from "@supabase/supabase-js";

export class CreateUser {
  static async execute(newUserData: RegisterUserDTO): Promise<Session> {
    return await AuthRepository.registerUser(newUserData);
  }
}
