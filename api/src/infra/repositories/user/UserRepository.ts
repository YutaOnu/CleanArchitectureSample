import { UserGateway } from "@/domain/gateway/user/UserGateway";
import { User } from "@/domain/model/user/User";
export class UserRepository implements UserGateway {
  create(user: User): void {
    // TODO: mysqlの保存処理を書く
  }
}
