// 通知者接口
class Subject {
  #subjectState = "";
  attach(observer) {
    throw new Error("接口未实现");
  }
  detach(observer) {
    throw new Error("接口未实现");
  }
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
  // 同事列表
  #observers = new Set();

  // 增加
  attach(observer) {
    this.#observers.add(observer);
  }

  // 减少
  detach(observer) {
    this.#observers.delete(observer);
  }

  // 通知
  notify() {
    this.#observers.forEach((item) => {
      item.update();
    });
  }

  // 老板状态
}

// 前台秘书类
export class Secretary extends Subject {
  // 同事列表
  #observers = new Set();

  // 增加
  attach(observer) {
    this.#observers.add(observer);
  }

  // 减少
  detach(observer) {
    this.#observers.delete(observer);
  }

  // 通知
  notify() {
    this.#observers.forEach((item) => {
      item.update();
    });
  }
}
