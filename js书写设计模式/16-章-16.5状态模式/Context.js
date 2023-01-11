import { ConcreteStateA } from "./State.js";

export class Context {
  #_state;
  constructor(state) {
    this.#_state = state;
  }
  get state() {
    return this.#_state;
  }
  set state(newVal) {
    this.#_state = newVal;
    // 不知道这里该怎么写
    console.log("当期状态：" + this.#_state);
  }

  request() {
    // 这里也不知道怎么写
    this.#_state.handle(this);
  }
}
