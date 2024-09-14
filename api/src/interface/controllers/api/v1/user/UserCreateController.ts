import { UserCreate } from "@/usecase/user/create/UserCreate";
import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";
import { UserCreateInputDTO } from "@/usecase/user/create/UserCreateInputDTO";
export class UserCreateController {
  constructor(private usecase: UserCreate) {}
  handle(req: UserCreateRequest): any {
    // TODO: any
    const inputDTO = new UserCreateInputDTO(req);
    return this.usecase.handle(inputDTO);
  }
}
