import { ConcreteIterator } from "./Iterator.js";

export class Aggregate {
  // 创建迭代器
  createIterator() {}
}

class ConcreteAggregate1 extends Aggregate {
  constructor() {
    super();
    this.items = new Array();
  }
  // #items = new Set();
  createIterator() {
    return new ConcreteIterator(this);
  }

  get count() {
    // 返回聚集总个数
    // return this.#items.count;
    return this.items.length;
  }

  // 原文是声明一个索引器，但是我不知道索引器，看了下客户端代码，决定使用代理
  // get
}

// ConcreteAggregate具体聚集类 继承Aggregate
export function ConcreteAggregate() {
  return new Proxy(new ConcreteAggregate1(), {
    get(target, propKey, receiver) {
      if (!isNaN(propKey)) {
        return target.items[propKey];
      }
      return target[propKey];
    },
    set(target, propKey, value, receiver) {
      if (!isNaN(propKey)) {
        target.items[propKey] = value;
      } else {
        target[propKey] = value;
      }
      return true;
    },
  });
}
