import { Request } from "express";
import { IUserCreateRequestAdapter } from "@/interface/adapters/user/IUserCreateRequestAdapter";
import { UserCreateRequest } from "@/interface/requests//user/UserCreateRequest";
export class UserCreateRequestAdapter
  implements IUserCreateRequestAdapter<Request>
{
  adapt(ExpressRequest: Request) {
    const name = ExpressRequest.body.name;
    return new UserCreateRequest(name);
  }
}
