// 通知者
class Subject {
  #subjectState = "";
  notify() {}
  set subjectState(newVal) {
    this.#subjectState = newVal;
  }
  get subjectState() {
    return this.#subjectState;
  }
}

// 老板类
export class Boss extends Subject {
  // 事件委托列表
  #eventHandler = new Set();

  addEventHandler(event) {
    this.#eventHandler.add(event);
  }
  delEventHandler(event) {
    this.#eventHandler.delete(event);
  }

  // 通知
  notify() {
    this.#eventHandler.forEach((item) => {
      typeof item === "function" && item();
    });
  }
}

// 前台秘书类
export class Secretary extends Subject {
  // 事件委托列表
  #eventHandler = new Set();

  addEventHandler(event) {
    this.#eventHandler.add(event);
  }
  delEventHandler(event) {
    this.#eventHandler.delete(event);
  }

  // 通知
  notify() {
    this.#eventHandler.forEach((item) => {
      typeof item === "function" && item();
    });
  }
}
