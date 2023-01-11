// 抽象中介类
class Mediator {
  // 定义一个抽象的发送消息方法，得到同事对象和发送信息
  send(message, colleague) {}
}

// 抽象同事类
class Colleague {
  constructor(mediator) {
    this.mediator = mediator;
  }
}

// 具体中介类
class ConcreteMediator extends Mediator {
  // 需要了解所有的具体同事对象
  #colleague1;
  set colleague1(newVal) {
    this.#colleague1 = newVal;
  }
  #colleague2;
  set colleague2(newVal) {
    this.#colleague2 = newVal;
  }

  send(message, colleague) {
    // 重写发送信息的方法，根据对象做出选择判断，通知对象
    if (colleague == this.#colleague1) {
      this.#colleague2.notify(message);
    } else {
      this.#colleague1.notify(message);
    }
  }
}

// 具体同事对象
class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
  send(message) {
    this.mediator.send(message, this);
  }

  notify(message) {
    console.log("同事1得到信息：" + message);
  }
}
// 具体同事对象
class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
  send(message) {
    this.mediator.send(message, this);
  }

  notify(message) {
    console.log("同事2得到信息：" + message);
  }
}

let m = new ConcreteMediator();

let c1 = new ConcreteColleague1(m);
let c2 = new ConcreteColleague2(m);

m.colleague1 = c1;
m.colleague2 = c2;

c1.send("吃过饭了吗？");
c2.send("没有呢，你打算请客？");
