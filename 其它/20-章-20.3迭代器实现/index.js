// js有默认的遍历接口 只要实现 Symbol.iterator 就好了

import { ConcreteAggregate } from "./Aggregate.js";
import { ConcreteIterator, ConcreteIteratorDesc } from "./Iterator.js";

// 新建聚集对象
let a = new ConcreteAggregate();

// 新上来的乘客，即对象数组
a[0] = "大鸟";
a[1] = "小菜";
a[2] = "行李";
a[3] = "老外";
a[4] = "公交内部员工";
a[5] = "小偷";
console.log(a);

// 售票员出场，先看好了上车的是哪些人，即声明了迭代器对象
// let i = new ConcreteIterator(a);
let i = new ConcreteIteratorDesc(a);
let item = i.first();
while (!i.isDone()) {
  console.log(i.currentItem() + " 请买车票");
  i.next(); // 下一乘客
}
