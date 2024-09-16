import { InvalidArgumentError } from "@/errors/InvalidArgumentError";

export class UserName {
  private static readonly MaxNameLength = 20;
  private static readonly MinNameLength = 1;
  private readonly _value: string;
  constructor(value: string) {
    this.validate(value);
    this._value = value;
  }
  private validate(value: string) {
    if (
      !value ||
      value.length < UserName.MinNameLength ||
      UserName.MaxNameLength < value.length
    ) {
      throw new InvalidArgumentError(
        `ユーザー名は${UserName.MinNameLength}〜${UserName.MaxNameLength}文字で入力してください`
      );
    }
  }
  get value() {
    return this._value;
  }
}
