export class Product {
  constructor() {
    this.parts = new Set();
  }

  add(part) {
    // 添加产品部件
    this.parts.add(part);
  }
  show() {
    console.log("\n产品创建 ----- ");
    // 列举所有的产品部件
    this.parts.forEach((item) => {
      console.log(item);
    });
  }
}
