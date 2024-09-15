export class UserId {
  constructor(private readonly _value: number) {}
  get value() {
    return this._value;
  }
}
