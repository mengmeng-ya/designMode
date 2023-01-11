// 用户表
export class User {
  #_id;
  #_name;
  #ID;
  #Name;
  set id(newVal) {
    this.#ID = newVal;
  }
  get id() {
    return this.#ID;
  }
  set name(newVal) {
    this.#Name = newVal;
  }
  get name() {
    return this.#Name;
  }
}
