export class UserCreateRequest {
  constructor(private readonly _name: string) {
    UserCreateRequest.validateRequest();
  }

  get name(): string {
    return this._name;
  }

  private static validateRequest() {
    // リクエストのバリデーション処理
  }
}
