// 股票1
class Stock1 {
  // 卖
  Sell() {
    console.log("股票1卖出");
  }
  // 买
  Buy() {
    console.log("股票1买入");
  }
}
// 股票2
class Stock2 {
  Sell() {
    console.log("股票2卖出");
  }
  Buy() {
    console.log("股票2买入");
  }
}
// 股票3
class Stock3 {
  Sell() {
    console.log("股票3卖出");
  }
  Buy() {
    console.log("股票3买入");
  }
}
// 国债1
class NationalDebt1 {
  Sell() {
    console.log("国债1卖出");
  }
  Buy() {
    console.log("国债1买入");
  }
}
// 房地产1
class Realty1 {
  Sell() {
    console.log("房地产1卖出");
  }
  Buy() {
    console.log("房地产1买入");
  }
}

let gu1 = new Stock1();
let gu2 = new Stock2();
let gu3 = new Stock3();

let nd1 = new NationalDebt1();
let rt1 = new Realty1();

gu1.Buy();
gu2.Buy();
gu3.Buy();
nd1.Buy();
rt1.Buy();

gu1.Sell();
gu2.Sell();
gu3.Sell();
nd1.Sell();
rt1.Sell();
