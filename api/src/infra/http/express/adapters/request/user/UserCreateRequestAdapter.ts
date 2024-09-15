import { Request as ExpressRequest } from "express";
import { IUserCreateRequestAdapter } from "@/interface/adapters/user/IUserCreateRequestAdapter";
import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";
export class UserCreateRequestAdapter implements IUserCreateRequestAdapter {
  adapt(ExpressRequest: ExpressRequest) {
    const name = ExpressRequest.body.name;
    return new UserCreateRequest(name);
  }
}
