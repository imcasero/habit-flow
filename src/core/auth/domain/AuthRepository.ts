import { AuthCredentials, User } from "./types";

export interface AuthRepository {
  createUser(credentials: AuthCredentials): Promise<User>;
  login(credentials: Omit<AuthCredentials, "username">): Promise<User>;
  logout(): Promise<void>;
}
