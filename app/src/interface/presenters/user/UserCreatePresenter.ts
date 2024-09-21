import { UserCreateOutputDTO } from "@/usecase/user/create/UserCreateOutputDTO";
import { UserCreateResponse } from "@/interface/responses/user/UserCreateResponse";
import { IUserCreatePresenter } from "@/interface/presenters/user/IUserCreatePresenter";
export class UserCreatePresenter implements IUserCreatePresenter {
  toResponse(userCreateOutputDTO: UserCreateOutputDTO) {
    // ex: フロントエンド側の都合でUserNameの末尾に改行コードを追加する
    const formatedName = userCreateOutputDTO.name.value + "\n";
    // コントローラーの戻り値になる
    return new UserCreateResponse(userCreateOutputDTO.id.value, formatedName);
  }
}
