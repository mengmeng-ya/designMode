// 上下文
class Context {
  constructor(strategy) {
    // 初始化时，传入具体的策略对象
    this.strategy = strategy;
  }

  // 上下文接口
  ContextInterface() {
    // 根据具体的策略对象，调用其算法的方法
    this.strategy.AlgorithmInterface();
  }
}

export default Context;
