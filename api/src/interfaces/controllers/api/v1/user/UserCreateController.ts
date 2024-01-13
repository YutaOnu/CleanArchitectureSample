import { User } from "@/domain/models/users/User";
import { UserName } from "@/domain/models/users/UserName";
import { CreateUser } from "@/application/usecases/users/CreateUser";
import { UserCreateRequest } from "@/interfaces/requests/api/vi/user/UserCreateRequest";
export class UserCreateController {
  constructor(private usecase: CreateUser) {}
  // 戻り値は一旦Roadmapを返すようにしています
  handle(req: UserCreateRequest): User {
    const user = new User(new UserName(req.name));
    return this.usecase.handle(user);
  }
}
