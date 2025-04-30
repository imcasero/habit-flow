import { AuthRepository } from "@/core/auth/domain/AuthRepository";
import { AuthCredentials } from "@/core/auth/domain/types";

export class CreateUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(credentials: AuthCredentials) {
    return this.authRepository.createUser(credentials);
  }
}
