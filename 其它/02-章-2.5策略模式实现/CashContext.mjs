class CashContext {
  constructor(csuper) {
    // 通过构造方法，传入具体的收费策略
    this.cs = csuper;
  }

  GetResult(money) {
    return this.cs.acceptCash(money);
  }
}

export default CashContext;
