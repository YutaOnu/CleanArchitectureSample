import { UserRepository } from "@/infra/repositories/user/UserRepository";
import { UserCreate } from "@/usecase/user/create/UserCreate";
import { UserCreateController } from "@/interface/controllers/user/UserCreateController";
import { UserCreatePresenter } from "@/interface/presenters/user/UserCreatePresenter";
export class UserInjector {
  constructor() {}
  static getUserCreateController(): UserCreateController {
    const userRepository = new UserRepository();
    const presenter = new UserCreatePresenter();
    const usecase = new UserCreate(userRepository);
    return new UserCreateController(usecase, presenter);
  }
}
