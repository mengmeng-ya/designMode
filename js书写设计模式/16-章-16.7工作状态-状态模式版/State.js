// 工作类，此时没有了过长的分支判断语句
// 抽象状态
class State {
  writeProgram(work) {}
}

// 上午和中午工作状态类
// 上午工作状态
export class ForenoonState extends State {
  writeProgram(work) {
    if (work.hour < 12) {
      console.log("当前时间：" + work.hour + "点 上午工作，精神百倍");
    } else {
      work.setState(new NoonState()); // 超过12点，则转入中午状态
      work.writeProgram();
    }
  }
}

// 中午工作状态
export class NoonState extends State {
  writeProgram(work) {
    if (work.hour < 13) {
      console.log("当前时间：" + work.hour + "点 饿了，午饭；犯困，午休。");
    } else {
      work.setState(new AfternoonState()); // 超过13点，则转入下午状态
      work.writeProgram();
    }
  }
}

// 下午工作状态
export class AfternoonState extends State {
  writeProgram(work) {
    if (work.hour < 17) {
      console.log("当前时间：" + work.hour + "点 下午状态还不错，继续努力");
    } else {
      work.setState(new EveningState()); // 超过17点，则转入傍晚状态
      work.writeProgram();
    }
  }
}

// 晚间工作状态
export class EveningState extends State {
  writeProgram(work) {
    if (work.taskFinished) {
      work.setState(new RestState()); // 如果完成任务，则转入下班状态
      work.writeProgram();
    } else {
      if (work.hour < 21) {
        console.log("当前时间：" + work.hour + "点 加班哦，疲累之极");
      } else {
        work.setState(new SleepingState()); // 超过21,则转入睡眠状态
        work.writeProgram();
      }
    }
  }
}

// 睡眠状态和下班休息状态
// 睡眠状态
export class SleepingState extends State {
  writeProgram(work) {
    console.log("当前时间：" + work.hour + "点 不行了睡着了");
  }
}

// 下班休息状态
export class RestState extends State {
  writeProgram(work) {
    console.log("当前时间：" + work.hour + "点 下班回家了");
  }
}
