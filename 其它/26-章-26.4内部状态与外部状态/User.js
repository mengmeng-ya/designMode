// 用户
export class User {
  #name;
  get name() {
    return this.#name;
  }
  constructor(name) {
    this.#name = name;
  }
}
