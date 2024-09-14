import { UserGateway } from "@/domain/gateways/UserGateway";
import { User } from "@/domain/models/users/User";
export class UserRepository implements UserGateway {
  create(user: User): void {
    // TODO: mysqlの保存処理を書く
  }
}
