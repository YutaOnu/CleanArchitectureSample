import { Request } from "express";
import { UserCreateRequest } from "@/interfaces/requests/api/vi/user/UserCreateRequest";
export function toUserCreateRequest(req: Request): UserCreateRequest {
  return new UserCreateRequest(req.body.name);
}
