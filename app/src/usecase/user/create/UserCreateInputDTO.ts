import { UserCreateRequest } from "@/interface/requests/user/UserCreateRequest";
export class UserCreateInputDTO {
  private readonly _name: string;
  constructor(_userCreateRequest: UserCreateRequest) {
    this._name = _userCreateRequest.name;
  }
  get name(): string {
    return this._name;
  }
}
