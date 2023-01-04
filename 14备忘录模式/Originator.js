import { Memento } from "./Memento.js";

// 发起人
export class Originator {
  // 需要保存的属性，可能有多个
  #state;
  get state() {
    return this.#state;
  }
  set state(newVal) {
    this.#state = newVal;
  }

  // 创建备忘录，将当前需要保存的信息导入并实例化出一个Memento对象
  createMemento() {
    return new Memento(this.state);
  }

  setMementto(memento) {
    // 恢复备忘录，将Memento导入并将相关数据恢复
    this.state = memento.state;
  }

  show() {
    // 显示数据
    console.log("state = " + this.state);
  }
}
