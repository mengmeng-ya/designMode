class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  // 执行命令
  excuteCommand() {}
}

// 烤羊肉串命令
export class BakeMuttonCommand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  excuteCommand() {
    this.receiver.bakeMutton();
  }
}

// 烤鸡翅命令
export class BakeChickenWingConmmand extends Command {
  constructor(receiver) {
    super(receiver);
  }

  excuteCommand() {
    this.receiver.bakeChickenWing();
  }
}
