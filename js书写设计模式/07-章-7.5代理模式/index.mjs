// 接口
class Subject {
  Request() {
    throw new Error("这个接口没有实现");
  }
}

// 实体
class RealSubject extends Subject {
  Request() {
    console.log("真实的请求");
  }
}

// 代理
class Proxy extends Subject {
  Request() {
    if (this.realSubject == null) {
      this.realSubject = new RealSubject();
    }
    this.realSubject.Request();
  }
}

// 客户端代码
let proxy = new Proxy();
proxy.Request();
