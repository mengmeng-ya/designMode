// 抽象，观察者
class Observer {
  constructor(name, sub) {
    this.name = name;
    this.sub = sub;
  }
  update() {}
}

// 看股票的同事
export class StockObserver extends Observer {
  constructor(name, sub) {
    super(name, sub);
  }
  update() {
    console.log(`${this.sub.subjectState} ${this.name} 关闭股票行情，继续工作`);
  }
}

// 看NBA的同事
export class NBAObserver extends Observer {
  constructor(name, sub) {
    super(name, sub);
  }
  update() {
    console.log(`${this.sub.subjectState} ${this.name} 关闭NBA直播，继续工作`);
  }
}
