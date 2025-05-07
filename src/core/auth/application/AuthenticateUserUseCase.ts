import { AuthRepository } from "@/core/auth/domain/AuthRepository";
import { AuthCredentials } from "@/core/auth/domain/types";

export class AuthenticateUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(credentials: Omit<AuthCredentials, "username">) {
    return this.authRepository.login(credentials);
  }
}
