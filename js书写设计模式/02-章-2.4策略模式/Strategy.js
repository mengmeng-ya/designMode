// 抽象算法类
class Strategy {
  // 算法方法
  algorithmInterface() {}
}

// 封装具体的算法或行为，继承于 Strategy
// 具体算法A
export class ConcreteStrategyA extends Strategy {
  // 实现方法
  algorithmInterface() {
    console.log("算法A实现");
  }
}

// 具体算法B
export class ConcreteStrategyB extends Strategy {
  // 实现方法
  algorithmInterface() {
    console.log("算法B实现");
  }
}

// 具体算法C
export class ConcreteStrategyC extends Strategy {
  // 实现方法
  algorithmInterface() {
    console.log("算法C实现");
  }
}
