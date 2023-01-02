import IGiveGift from "./IGiveGift.mjs";

// 追求者类
class Pursuit extends IGiveGift {
  constructor(mm) {
    super();
    this.mm = mm;
  }

  GiveDolls() {
    console.log(this.mm.Name + "送你洋娃娃");
  }

  GiveFlowers() {
    console.log(this.mm.Name + "送你鲜花");
  }
  GiveChocolate() {
    console.log(this.mm.Name + "送你巧克力");
  }
}

export default Pursuit;
