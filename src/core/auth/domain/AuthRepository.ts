import { AuthCredentials, User } from "./types";

export interface AuthRepository {
  createUser(credentials: AuthCredentials): Promise<User>;
  login(credentials: AuthCredentials): Promise<User>;
  logout(): Promise<void>;
}
