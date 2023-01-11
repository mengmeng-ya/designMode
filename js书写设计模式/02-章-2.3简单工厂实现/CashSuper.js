// 现金收取抽象类
class CashSuper {
  acceptCash(money) {
    return money;
  }
}

// 正常收费子类
export class CashNormal extends CashSuper {
  acceptCash(money) {
    // 正常收费原价返回
    return money;
  }
}

// 打折收费子类
export class CashRebate extends CashSuper {
  constructor(moneyRebate = 1) {
    super();
    this.moneyRebate = moneyRebate;
  }
  acceptCash(money) {
    return money * this.moneyRebate;
  }
}

// 返利收费子类
export class CashReturn extends CashSuper {
  constructor(moneyCondition = 0, moneyReturn = 0.0) {
    super();
    this.moneyCondition = moneyCondition; // 返利条件
    this.moneyReturn = moneyReturn; // 返利值
  }

  acceptCash(money) {
    let result = money;
    if (money >= this.moneyCondition) {
      // 若大于返利条件，则需要减去返利值
      result = money - Math.floor(money / this.moneyCondition) * this.moneyReturn;
    }
    return result;
  }
}
