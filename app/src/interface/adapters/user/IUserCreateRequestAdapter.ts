import { UserCreateRequest } from "@/interface/requests//user/UserCreateRequest";

export interface IUserCreateRequestAdapter<T> {
  adapt(requestData: T): UserCreateRequest;
}
