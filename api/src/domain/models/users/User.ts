import { UserId } from "./UserId";
import { UserName } from "./UserName";
export class User {
  constructor(
    private readonly name: UserName,
    private readonly userId?: UserId
  ) {}
}
