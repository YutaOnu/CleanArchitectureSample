import { Request } from "express";
import { IUserCreateRequestAdapter } from "@/interface/adapters/user/IUserCreateRequestAdapter";
import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";
import { UserCreateValidator } from "@/infra/http/express/validators/user/UserCreateValidator";
export class UserCreateRequestAdapter
  implements IUserCreateRequestAdapter<Request>
{
  adapt(ExpressRequest: Request) {
    UserCreateValidator.validate(ExpressRequest);
    const name = ExpressRequest.body.name;
    return new UserCreateRequest(name);
  }
}
