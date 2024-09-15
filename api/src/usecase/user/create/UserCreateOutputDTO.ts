import { UserId } from "@/domain/model/user/UserId";
import { UserName } from "@/domain/model/user/UserName";
export class UserCreateOutputDTO {
  private readonly _id: UserId;
  private readonly _name: UserName;

  constructor(id: UserId, name: UserName) {
    this._id = id;
    this._name = name;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
}
