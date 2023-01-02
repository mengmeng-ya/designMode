import { SubSystemFour, SubSystemOne, SubSystemThree, SubSystemTwo } from "./SubSystem.mjs";

export class Facade {
  constructor() {
    this.one = new SubSystemOne();
    this.two = new SubSystemTwo();
    this.three = new SubSystemThree();
    this.four = new SubSystemFour();
  }

  MethodA() {
    console.log("方法组A（） ----");
    this.one.MethodOne();
    this.two.MethodTwo();
    this.four.MethodFour();
  }

  MethodB() {
    console.log("方法组B（） ----");
    this.two.MethodTwo();
    this.three.MethodThree();
  }
}
