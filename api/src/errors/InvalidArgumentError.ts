export class InvalidArgumentError extends Error {
  static {
    this.prototype.name = "InvalidArgumentError";
  }
}
