// 策略模式与简单工厂结合的用法，此文件只需要导入一个类就好了，降低耦合。
import CashContext from "./CashContext.js";

//账单
let bill = {
  goods: [],
  total: 0, // 总计
};

// 收费方式
let calculationMethod = {
  0: "正常收费",
  1: "满300返100",
  2: "打八折",
};

// 实例化新的商品
class Goods {
  constructor(unitPrice, quantity, index) {
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.index = index;
  }
}

// 更新账单
function btnOK_Click(newGoods = new Goods(0, 0, 0)) {
  let csuper = null;
  let totalPrices = 0;

  csuper = new CashContext(calculationMethod[newGoods.index]);
  totalPrices = csuper.getResult(newGoods.unitPrice * newGoods.quantity);

  bill.total += totalPrices;
  bill.goods.push(
    "单价：" +
      newGoods.unitPrice +
      "\t数量：" +
      newGoods.quantity +
      "\t" +
      `${calculationMethod[newGoods.index]}\t合计：${totalPrices}`
  );
}

btnOK_Click(new Goods(1000, 1, 1));
btnOK_Click(new Goods(2000, 1, 0));
btnOK_Click(new Goods(9, 1, 2));
// btnOK_Click();

bill.goods.forEach((item) => {
  console.log(item);
});
console.log("总计：", bill.total);
