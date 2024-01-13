import { UserId } from "@/domain/models/users/UserId";
import { UserName } from "@/domain/models/users/UserName";
export class User {
  constructor(
    private readonly name: UserName,
    private readonly userId?: UserId
  ) {}
}
