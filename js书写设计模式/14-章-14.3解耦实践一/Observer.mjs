// 抽象，观察者
class Observer {
  constructor(name, sub) {
    this.name = name;
    this.sub = sub;
  }
  Update() {}
}

// 看股票的同事
export class StockObserver extends Observer {
  constructor(name, sub) {
    super(name, sub);
  }
  Update() {
    console.log(`${this.sub.action} ${this.name} 关闭股票行情，继续工作`);
  }
}

// 看NBA的同事
export class NBAObserver extends Observer {
  constructor(name, sub) {
    super(name, sub);
  }
  Update() {
    console.log(`${this.sub.action} ${this.name} 关闭NBA直播，继续工作`);
  }
}
