import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";

export interface IUserCreateRequestAdapter {
  adapt(requestData: any): UserCreateRequest;
}
