import { UserCreate } from "@/usecase/user/create/UserCreate";
import { UserCreateRequest } from "@/interface/requests/user/UserCreateRequest";
import { UserCreateInputDTO } from "@/usecase/user/create/UserCreateInputDTO";
import { UserCreateResponse } from "@/interface/responses/user/UserCreateResponse";
import { IUserCreatePresenter } from "@/interface/presenters/user/IUserCreatePresenter";
export class UserCreateController {
  constructor(
    private readonly _usecase: UserCreate,
    private readonly _presenter: IUserCreatePresenter
  ) {}
  handle(req: UserCreateRequest): UserCreateResponse {
    const inputDto = new UserCreateInputDTO(req);
    const outputDto = this._usecase.handle(inputDto);
    return this._presenter.toResponse(outputDto);
  }
}
