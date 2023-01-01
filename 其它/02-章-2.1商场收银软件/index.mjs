//账单
let bill = {
  goods: [],
  total: 0, // 总计
};

// 收费方式
let calculationMethod = {
  0: "正常收费",
  1: "打八折",
  2: "打七折",
  3: "打五折",
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
  let totalPrices = 0;
  switch (newGoods.index) {
    case 0:
      totalPrices = newGoods.unitPrice * newGoods.quantity;
      break;
    case 1:
      totalPrices = newGoods.unitPrice * newGoods.quantity * 0.8;
      break;
    case 2:
      totalPrices = newGoods.unitPrice * newGoods.quantity * 0.7;
      break;

    case 3:
      totalPrices = newGoods.unitPrice * newGoods.quantity * 0.5;
      break;

    default:
      totalPrices = 0;
      break;
  }
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
btnOK_Click(new Goods(100, 1, 3));
btnOK_Click();

bill.goods.forEach((item) => {
  console.log(item);
});
console.log("总计：", bill.total);
