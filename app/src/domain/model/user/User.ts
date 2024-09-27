import { UserId } from "@/domain/model/user/UserId";
import { UserName } from "@/domain/model/user/UserName";
export class User {
  constructor(
    private readonly _name: UserName,
    private readonly _id: UserId | null = null
  ) {}
  get name(): UserName {
    return this._name;
  }
  get id(): UserId {
    if (this._id === null) {
      throw new Error("idが設定されていません");
    }
    return this._id;
  }
}
