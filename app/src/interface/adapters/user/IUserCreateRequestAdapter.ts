import { UserCreateRequest } from "@/interface/requests/api/v1/user/UserCreateRequest";

export interface IUserCreateRequestAdapter<T> {
  adapt(requestData: T): UserCreateRequest;
}
