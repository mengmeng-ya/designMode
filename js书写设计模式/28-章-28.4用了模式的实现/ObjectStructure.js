// 对象结构
export class ObjectStructure {
  #elements = new Set();

  // 增加
  attach(element) {
    this.#elements.add(element);
  }

  // 移除
  detach(element) {
    this.#elements.delete(element);
  }

  // 查看显示
  display(visitor) {
    this.#elements.forEach((item) => {
      item.accept(visitor);
    });
  }
}
