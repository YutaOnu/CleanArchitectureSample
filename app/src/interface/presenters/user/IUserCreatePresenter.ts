import { UserCreateOutputDTO } from "@/usecase/user/create/UserCreateOutputDTO";
import { UserCreateResponse } from "@/interface/responses/user/UserCreateResponse";

export interface IUserCreatePresenter {
  toResponse(userCreateOutputDTO: UserCreateOutputDTO): UserCreateResponse;
}
