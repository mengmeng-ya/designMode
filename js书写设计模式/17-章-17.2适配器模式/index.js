// 适配器模式
// 接口，目标可以是具体的或抽象的类，也可以是接口
class Target {
  request() {
    console.log("普通请求！");
  }
}

// 需要适配的类
class Adaptee {
  SpecificRequest() {
    console.log("特殊请求");
  }
}

// 通过在内部包装一个Adaptee对象，把源接口转换成目标接口
class Adapter extends Target {
  constructor() {
    super();
    // 建立一个私有的
    this.adaptee = new Adaptee();
  }

  request() {
    this.adaptee.SpecificRequest();
  }
}

// 客户端代码
let target = new Adapter();
target.request();
