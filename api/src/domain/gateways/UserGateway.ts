import { User } from "@/domain/models/users/User";
export interface UserGateway {
  create(user: User): void;
}
