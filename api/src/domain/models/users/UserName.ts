export class UserName {
  private static readonly MaxNameLength = 50;
  private static readonly MinNameLength = 1;
  constructor(private readonly name: string) {
    UserName.validate(name);
  }
  private static validate(name: string) {
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
