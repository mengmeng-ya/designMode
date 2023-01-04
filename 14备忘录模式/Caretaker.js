export class Caretaker {
  // 得到或设置备忘录
  #memento;
  get memento() {
    return this.#memento;
  }
  set memento(newVal) {
    this.#memento = newVal;
  }
}
