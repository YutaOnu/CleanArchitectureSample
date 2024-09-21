export class UserCreateResponse {
  constructor(private readonly _id: number, private readonly _name: string) {}
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
}
