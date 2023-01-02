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

// 基金类，它需要了解所有的股票或其他投资方式的方法或属性，进行组合，以备外界调用。
class Fund {
  constructor() {
    this.gu1 = new Stock1();
    this.gu2 = new Stock2();
    this.gu3 = new Stock3();
    this.nd1 = new NationalDebt1();
    this.rt1 = new Realty1();
  }
  BuyFund() {
    this.gu1.Buy();
    this.gu2.Buy();
    this.gu3.Buy();
    this.nd1.Buy();
    this.rt1.Buy();
  }
  SellFund() {
    this.gu1.Sell();
    this.gu2.Sell();
    this.gu3.Sell();
    this.nd1.Sell();
    this.rt1.Sell();
  }
}

let jijin = new Fund();
jijin.BuyFund();
jijin.SellFund();
