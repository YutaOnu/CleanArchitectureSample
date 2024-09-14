import { User } from "@/domain/model/user/User";
export interface UserGateway {
  create(user: User): void;
}
