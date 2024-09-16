import { UserId } from "@/domain/model/user/UserId";
import { UserName } from "@/domain/model/user/UserName";
export class UserCreateOutputDTO {
  constructor(private readonly _id: UserId, private readonly _name: UserName) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}
