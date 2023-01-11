export class Work {
  #_hour;
  get hour() {
    return this.#_hour;
  }
  set hour(newVal) {
    this.#_hour = newVal;
  }
  #_taskFinished;
  get taskFinished() {
    return this.#_taskFinished;
  }
  set taskFinished(newVal) {
    this.#_taskFinished = newVal;
  }
  writeProgram() {
    if (this.#_hour < 12) {
      console.log("当前时间：" + this.#_hour + "点 上午工作，精神百倍");
    } else if (this.#_hour < 13) {
      console.log("当前时间：" + this.#_hour + "点 饿了，午饭；犯困，午休。");
    } else if (this.#_hour < 17) {
      console.log("当前时间：" + this.#_hour + "点 下午状态还不错，继续努力");
    } else {
      if (this.#_taskFinished) {
        console.log("当前时间：" + this.#_hour + "点 下班回家了");
      } else {
        if (this.#_hour < 21) {
          console.log("当前时间：" + this.#_hour + "点 加班哦，疲累之极");
        } else {
          console.log("当前时间：" + this.#_hour + "点 不行了睡着了");
        }
      }
    }
  }
}
