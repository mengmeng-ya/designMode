// 外籍中锋
export class ForeignCenter {
  #_name;
  get name() {
    return this.#_name;
  }
  set name(newVal) {
    this.#_name = newVal;
  }

  进攻() {
    // 表明外籍中锋只懂得中文“进攻”
    console.log("外籍中锋" + this.#_name + "进攻");
  }

  防守() {
    console.log("外籍中锋" + this.#_name + "防守");
  }
}
