export class Context {
  #state;
  constructor(state) {
    this.#state = state;
  }
  get state() {
    return this.#state;
  }
  set state(newVal) {
    this.#state = newVal;
    console.log("当期状态：" + this.#state.constructor.name);
  }

  request() {
    this.#state.handle(this);
  }
}
