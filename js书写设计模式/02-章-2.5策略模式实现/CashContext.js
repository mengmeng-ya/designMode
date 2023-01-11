class CashContext {
  constructor(csuper) {
    // 通过构造方法，传入具体的收费策略
    this.cs = csuper;
  }

  getResult(money) {
    return this.cs.acceptCash(money);
  }
}

export default CashContext;
