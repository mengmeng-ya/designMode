import { CashNormal, CashRebate, CashReturn } from "./CashSuper.js";

// 现金收费工厂类
class CashFactory {
  static createCashAccept(type) {
    let cs = null;
    switch (type) {
      case "正常收费":
        cs = new CashNormal();
        break;
      case "满300返100":
        cs = new CashReturn(300, 100);
        break;
      case "打八折":
        cs = new CashRebate(0.8);
        break;
    }
    return cs;
  }
}

export default CashFactory;
