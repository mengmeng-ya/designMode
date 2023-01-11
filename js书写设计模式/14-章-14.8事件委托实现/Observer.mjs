// 看股票的同事
export class StockObserver {
  #name;
  #sub;
  constructor(name, sub) {
    this.#name = name;
    this.#sub = sub;
  }
  // 关闭股票行情
  CloseStockMarket = () => {
    // 方法“更新”名改为“关闭股票程序”
    console.log(`${this.#sub.subjectState} ${this.#name} 关闭股票行情，继续工作`);
  };
}

// 看NBA的同事
export class NBAObserver {
  #name;
  #sub;
  constructor(name, sub) {
    this.#name = name;
    this.#sub = sub;
  }
  CloseNBADirectSeeding = () => {
    // 方法“更新”名改为“关闭NBA直播”
    console.log(`${this.#sub.subjectState} ${this.#name} 关闭NBA直播，继续工作`);
  };
}
