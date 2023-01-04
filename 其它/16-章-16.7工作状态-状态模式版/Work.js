import { ForenoonState } from "./State.js";

export class Work {
  constructor() {
    // 工作状态初始化为上午工作状态，即上午9点开始上班
    this.current = new ForenoonState();
  }
  // “钟点”属性，状态转换的依据
  #_hour;
  get hour() {
    return this.#_hour;
  }
  set hour(newVal) {
    this.#_hour = newVal;
  }

  // “任务完成”属性，是否能下班的依据
  #_taskFinished = false;
  get taskFinished() {
    return this.#_taskFinished;
  }
  set taskFinished(newVal) {
    this.#_taskFinished = newVal;
  }

  setState(s) {
    this.current = s;
  }

  writeProgram() {
    this.current.writeProgram(this);
  }
}
