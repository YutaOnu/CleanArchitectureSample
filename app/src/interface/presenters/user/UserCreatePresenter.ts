import { UserCreateOutputDTO } from "@/usecase/user/create/UserCreateOutputDTO";
import { UserCreateResponse } from "@/interface/responses/api/v1/user/UserCreateResponse";
import { IUserCreatePresenter } from "@/interface/presenters/user/IUserCreatePresenter";
export class UserCreatePresenter implements IUserCreatePresenter {
  toResponse(userCreateOutputDTO: UserCreateOutputDTO) {
    // ex: フロントエンド側の都合でUserNameの末尾に改行コードを追加する
    const formatedName = userCreateOutputDTO.name.value + "\n";
    return new UserCreateResponse(userCreateOutputDTO.id.value, formatedName);
  }
}
