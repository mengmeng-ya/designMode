import IGiveGift from "./IGiveGift.mjs";
import Pursuit from "./Pursuit.mjs";

// 代理类
class Proxy extends IGiveGift {
  constructor(mm) {
    super();
    this.gg = new Pursuit(mm);
  }

  GiveDolls() {
    this.gg.GiveDolls();
  }

  GiveFlowers() {
    this.gg.GiveFlowers();
  }
  GiveChocolate() {
    this.gg.GiveChocolate();
  }
}

export default Proxy;
