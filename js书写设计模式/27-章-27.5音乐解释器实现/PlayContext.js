// 演奏内容
export class PlayContext {
  // 演奏文本
  #playText;
  get playText() {
    return this.#playText;
  }
  set playText(newVal) {
    this.#playText = newVal;
  }
}
