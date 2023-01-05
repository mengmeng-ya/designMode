// 服务员
export class Waiter {
  #command;

  // 设置订单
  setOrder(command) {
    this.#command = command;
  }

  // 通知执行
  notify() {
    this.#command.excuteCommand();
  }
}
