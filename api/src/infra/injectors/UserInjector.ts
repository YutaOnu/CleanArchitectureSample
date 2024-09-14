import { UserRepository } from "@/infra/repositories/user/UserRepository";
import { UserCreate } from "@/usecase/user/create/UserCreate";
import { UserCreateController } from "@/interface/controllers/api/v1/user/UserCreateController";
export class UserInjector {
  constructor() {}
  getUserCreateController(): UserCreateController {
    const userRepository = new UserRepository();
    const usecase = new UserCreate(userRepository);
    return new UserCreateController(usecase);
  }
}
