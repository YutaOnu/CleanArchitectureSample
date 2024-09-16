import { Request } from "express";
import { InvalidArgumentError } from "@/errors/InvalidArgumentError";
export class UserCreateValidator {
  static validate(req: Request) {
    if (!req.body.name) {
      throw new InvalidArgumentError("nameが不正です！");
    }
  }
}

export default UserCreateValidator;
