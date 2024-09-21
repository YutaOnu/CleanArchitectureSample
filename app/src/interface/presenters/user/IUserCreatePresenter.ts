import { UserCreateOutputDTO } from "@/usecase/user/create/UserCreateOutputDTO";
import { UserCreateResponse } from "@/interface/responses/api/v1/user/UserCreateResponse";

export interface IUserCreatePresenter {
  toResponse(userCreateOutputDTO: UserCreateOutputDTO): UserCreateResponse;
}
