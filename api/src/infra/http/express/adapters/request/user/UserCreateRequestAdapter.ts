import { Request as ExpressRequest } from "express";
import { IRequestAdapter } from "@/infra/http/express/adapters/request/IRequestAdapter";
import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";
export class UserCreateRequestAdapter implements IRequestAdapter {
  adapt(ExpressRequest: ExpressRequest) {
    const name = ExpressRequest.body.name;
    return new UserCreateRequest(name);
  }
}
