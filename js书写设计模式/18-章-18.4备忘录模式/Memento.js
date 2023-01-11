// 备忘录
export class Memento {
  #state;
  constructor(state) {
    this.#state = state;
  }
  get state() {
    // 需要保存的数据属性，可以是多个
    return this.#state;
  }
}
