import { User } from "@/domain/models/users/User";
import { UserGateway } from "@/domain/gateways/UserGateway";

export class CreateUser {
  constructor(private readonly userRepository: UserGateway) {}
  handle(user: User) {
    this.userRepository.create(user);
    return user;
  }
}
