import { IRequest } from "@/interface/requests/api/v1/IRequest";
export class UserCreateRequest implements IRequest {
  constructor(private readonly _name: string) {}
  get name(): string {
    return this._name;
  }
}
