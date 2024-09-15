import { User } from "@/domain/model/user/User";
import { UserName } from "@/domain/model/user/UserName";
import { UserGateway } from "@/domain/gateway/user/UserGateway";
import { UserCreateInputDTO } from "@/usecase/user/create/UserCreateInputDTO";
import { UserCreateOutputDTO } from "@/usecase/user/create/UserCreateOutputDTO";
export class UserCreate {
  constructor(private readonly _userRepository: UserGateway) {}
  handle(userCreateInputDTO: UserCreateInputDTO): UserCreateOutputDTO {
    const userName = new UserName(userCreateInputDTO.name);
    const user = new User(userName);
    const result = this._userRepository.create(user);
    if (result.id === null) {
      throw new Error("idが存在しません");
    }
    const userCreateOutputDTO = new UserCreateOutputDTO(result.id, result.name);
    return userCreateOutputDTO;
  }
}
