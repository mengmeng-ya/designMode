import { CashNormal, CashRebate, CashReturn } from "./CashSuper.mjs";

class CashContext {
  constructor(type) {
    // type 收费类型
    let csuper;
    switch (type) {
      case "正常收费":
        csuper = new CashNormal();
        break;
      case "满300返100":
        csuper = new CashReturn(300, 100);
        break;
      case "打八折":
        csuper = new CashRebate(0.8);
        break;
      default:
        break;
    }
    this.cs = csuper;
    csuper = null;
  }

  GetResult(money) {
    return this.cs.acceptCash(money);
  }
}

export default CashContext;
