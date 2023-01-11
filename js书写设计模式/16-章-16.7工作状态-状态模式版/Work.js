import { ForenoonState } from "./State.js";

export class Work {
  constructor() {
    // 工作状态初始化为上午工作状态，即上午9点开始上班
    this.current = new ForenoonState();
  }
  // “钟点”属性，状态转换的依据
  #hour;
  get hour() {
    return this.#hour;
  }
  set hour(newVal) {
    this.#hour = newVal;
  }

  // “任务完成”属性，是否能下班的依据
  #taskFinished = false;
  get taskFinished() {
    return this.#taskFinished;
  }
  set taskFinished(newVal) {
    this.#taskFinished = newVal;
  }

  setState(s) {
    this.current = s;
  }

  writeProgram() {
    this.current.writeProgram(this);
  }
}
