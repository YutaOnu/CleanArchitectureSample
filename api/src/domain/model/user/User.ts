import { UserId } from "@/domain/model/user/UserId";
import { UserName } from "@/domain/model/user/UserName";
export class User {
  constructor(
    private readonly name: UserName,
    private readonly userId?: UserId
  ) {}
}
