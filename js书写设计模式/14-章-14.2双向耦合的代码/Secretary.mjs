// 前台秘书类

export class Secretary {
  constructor() {
    // 同事列表
    this.observers = new Set();
    // 前台状态
    this.action = "";
  }

  // 增加
  Attach(observer) {
    // 将需要请前台帮忙的同事加入集合
    this.observers.add(observer);
  }

  // 通知
  Notify() {
    // 待老板来时，就给所有的登记的同事们发通知
    this.observers.forEach((item) => {
      item.Update();
    });
  }

  // 前台状态
  getSecretaryAction() {
    return this.action;
  }
  setSecretaryAction(value) {
    this.action = value;
  }
}
