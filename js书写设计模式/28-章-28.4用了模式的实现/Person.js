class Person {
  // 获得状态对象
  accept(visitor) {}
}

// 男人
export class Man extends Person {
  accept(visitor) {
    visitor.getManConclusion(this);
  }
}

// 女人
export class WoMan extends Person {
  accept(visitor) {
    visitor.getManConclusion(this);
  }
}
