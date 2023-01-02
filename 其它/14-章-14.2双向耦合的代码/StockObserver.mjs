// 看股票类同事
export class StockObserver {
  constructor(name, sub) {
    this.name = name;
    this.sub = sub;
  }

  Update() {
    // 得到前台通知，赶快采取行动
    console.log(`${this.sub.getSecretaryAction()} ${this.name} 关闭股票行情，继续工作`);
  }
}
