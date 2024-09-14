export class UserName {
  private static readonly MaxNameLength = 20;
  private static readonly MinNameLength = 1;
  private readonly _name: string;
  constructor(name: string) {
    this.validate(name);
    this._name = name;
  }
  private validate(name: string) {
    if (
      !name ||
      name.length < UserName.MinNameLength ||
      UserName.MaxNameLength < name.length
    ) {
      throw new Error(
        `ユーザー名は${UserName.MinNameLength}〜${UserName.MaxNameLength}文字で入力してください`
      );
    }
  }
}
