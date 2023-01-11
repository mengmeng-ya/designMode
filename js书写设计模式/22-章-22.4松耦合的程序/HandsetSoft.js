// 手机软件
class HandsetSoft {
  run() {}
}

// 游戏、通讯录等具体类
// 手机游戏
class HandsetGame extends HandsetSoft {
  run() {
    console.log("运行手机游戏");
  }
}

// 手机通讯录
class HandsetAddressList extends HandsetSoft {
  run() {
    console.log("运行手机通讯录");
  }
}

// 手机品牌
class HandsetBrand {
  // 设置手机软件
  setHandsetSoft(soft) {
    this.soft = soft;
  }
  // 运行
  run() {}
}

// 手机品牌
class HandsetBrandN extends HandsetBrand {
  run() {
    this.soft.run();
  }
}
// 手机品牌
class HandsetBrandM extends HandsetBrand {
  run() {
    this.soft.run();
  }
}

let ab;
ab = new HandsetBrandN();

ab.setHandsetSoft(new HandsetGame());
ab.run();

ab.setHandsetSoft(new HandsetAddressList());
ab.run();

ab = new HandsetBrandM();

ab.setHandsetSoft(new HandsetGame());
ab.run();

ab.setHandsetSoft(new HandsetAddressList());
ab.run();
