// 用于定义得到开始对象，得到下一个对象，判断是否到结尾，当前对象等抽象方法，统一接口
class Iterator {
  first() {}
  next() {}
  isDone() {}
  currentItem() {}
}

export class ConcreteIterator extends Iterator {
  // 定义了一个具体聚集对象
  #aggregate;
  #current = 0;

  constructor(aggregate) {
    // 初始化时将具体的聚集对象传入
    super();
    this.#aggregate = aggregate;
  }
  first() {
    // 得到聚集的第一个对象
    return this.#aggregate[0];
  }
  next() {
    // 得到聚集的下一个对象
    let ret = null;
    this.#current++;
    if (this.#current < this.#aggregate.count) {
      ret = this.#aggregate[this.#current];
    }
    return ret;
  }
  isDone() {
    // 判断当前是否遍历到结尾，到结尾返回 true
    return this.#current >= this.#aggregate.count ? true : false;
  }
  currentItem() {
    // 返回当前的聚集对象
    return this.#aggregate[this.#current];
  }
}

// 从后往前迭代
export class ConcreteIteratorDesc extends Iterator {
  // 定义了一个具体聚集对象
  #aggregate;
  #current = 0;

  constructor(aggregate) {
    // 初始化时将具体的聚集对象传入
    super();
    this.#aggregate = aggregate;
    this.#current = aggregate.count - 1;
  }
  first() {
    // 得到聚集的第一个对象
    return this.#aggregate[this.#aggregate.count - 1];
  }
  next() {
    // 得到聚集的下一个对象
    let ret = null;
    this.#current--;
    if (this.#current >= 0) {
      ret = this.#aggregate[this.#current];
    }
    return ret;
  }
  isDone() {
    // 判断当前是否遍历到结尾，到结尾返回 true
    return this.#current < 0 ? true : false;
  }
  currentItem() {
    // 返回当前的聚集对象
    return this.#aggregate[this.#current];
  }
}
