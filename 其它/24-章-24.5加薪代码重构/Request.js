export class Request {
  // 申请类别
  #requestType;
  get requestType() {
    return this.#requestType;
  }
  set requestType(newVal) {
    this.#requestType = newVal;
  }

  // 申请内容
  #requestContent;
  get requestContent() {
    return this.#requestContent;
  }
  set requestContent(newVal) {
    this.#requestContent = newVal;
  }

  // 数量
  #number;
  get number() {
    return this.#number;
  }
  set number(newVal) {
    this.#number = newVal;
  }
}
