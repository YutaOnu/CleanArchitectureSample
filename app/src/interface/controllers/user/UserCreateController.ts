import { UserCreate } from "@/usecase/user/create/UserCreate";
import { UserCreateRequest } from "@/interface/requests//user/UserCreateRequest";
import { UserCreateInputDTO } from "@/usecase/user/create/UserCreateInputDTO";
import { UserCreateResponse } from "@/interface/responses//user/UserCreateResponse";
export class UserCreateController {
  constructor(private usecase: UserCreate) {}
  handle(req: UserCreateRequest): UserCreateResponse {
    const inputDTO = new UserCreateInputDTO(req);
    return this.usecase.handle(inputDTO);
  }
}
