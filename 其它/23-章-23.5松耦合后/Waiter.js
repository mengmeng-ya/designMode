// 服务员
export class Waiter {
  #command;
  #orders = new Set();

  // 设置订单
  setOrder(command) {
    if (command.constructor.name === "BakeChickenWingConmmand") {
      console.log("服务员：鸡翅没有了，请点别的烧烤。");
    } else {
      this.#orders.add(command);
      console.log("增加订单：" + command.constructor.name + "  时间：" + new Date());
    }
    // this.#command = command;
  }

  // 取消订单
  cancelOrder(command) {
    this.#orders.delete(command);
    console.log("取消订单：" + command.constructor.name + "  时间：" + new Date());
  }

  // 通知执行
  notify() {
    // this.#command.excuteCommand();
    this.#orders.forEach((item) => {
      item.excuteCommand();
    });
  }
}
