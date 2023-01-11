// 雷锋
class LeiFeng {
  Sweep() {
    console.log("扫地");
  }
  Wash() {
    console.log("洗衣");
  }
  BuyRice() {
    console.log("买米");
  }
}

// 学雷锋的大学生
class Undergraduate extends LeiFeng {}

// 社区志愿者
class Volunteer extends LeiFeng {}

export { Undergraduate, Volunteer };
