import { User } from "@/domain/model/user/User";
import { UserId } from "@/domain/model/user/UserId";
import { UserName } from "@/domain/model/user/UserName";
import { UserGateway } from "@/domain/gateway/user/UserGateway";
import { UserCreateInputDTO } from "@/usecase/user/create/UserCreateInputDTO";
export class UserCreate {
  constructor(private readonly _userRepository: UserGateway) {}
  handle(userCreateInputDTO: UserCreateInputDTO) {
    const userName = new UserName(userCreateInputDTO.name);
    const user = new User(userName);
    this._userRepository.create(user);
    return user;
  }
}
