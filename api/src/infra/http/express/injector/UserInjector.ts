import { UserRepository } from "@/infra/db/mysql/repositories/UserRepository";
import { CreateUser } from "@/application/usecases/users/CreateUser";
import { UserCreateController } from "@/interfaces/controllers/api/v1/user/UserCreateController";
export class UserInjector {
  constructor() {}
  getUserCreateController(): UserCreateController {
    const userRepository = new UserRepository();
    const usecase = new CreateUser(userRepository);
    return new UserCreateController(usecase);
  }
}
