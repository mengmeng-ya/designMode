import { Product } from "./Product.js";

class Builder {
  buildPartA() {}
  buildPartB() {}
  getResult() {}
}

// 具体建造者类
export class ConcreteBuilder1 extends Builder {
  #product = new Product();
  buildPartA() {
    this.#product.add("部件A");
  }
  buildPartB() {
    this.#product.add("部件B");
  }
  getResult() {
    return this.#product;
  }
}
// 具体建造者类
export class ConcreteBuilder2 extends Builder {
  #product = new Product();
  buildPartA() {
    this.#product.add("部件X");
  }
  buildPartB() {
    this.#product.add("部件Y");
  }
  getResult() {
    return this.#product;
  }
}
