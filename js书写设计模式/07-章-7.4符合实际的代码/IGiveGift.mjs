// 这是一个接口
class IGiveGift {
  GiveDolls() {
    throw new Error("这个接口没有实现");
  }
  GiveFlowers() {
    throw new Error("这个接口没有实现");
  }
  GiveChocolate() {
    throw new Error("这个接口没有实现");
  }
}

export default IGiveGift;
