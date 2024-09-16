import { UserGateway } from "@/domain/gateway/user/UserGateway";
import { User } from "@/domain/model/user/User";
import { UserId } from "@/domain/model/user/UserId";
export class UserRepository implements UserGateway {
  create(user: User): User {
    // TODO: mysqlの保存処理を書く
    // 保存結果からidを取得し、ドメインオブジェクトとして返す処理を擬似的に表現
    return new User(user.name, new UserId(1));
  }
}
