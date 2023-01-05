class Person {
  #action;
  get action() {
    return this.#action;
  }
  set action(newVal) {
    this.#action = newVal;
  }

  // 得到结论或反应
  getConclusion() {}
}

//
export class Man extends Person {
  //得到结论或反应
  getConclusion() {
    if (this.action == "成功") {
      console.log(this.constructor.name + "  " + this.action + "时，背后多半有一个伟大的女人。");
    } else if (this.action == "失败") {
      console.log(this.constructor.name + "  " + this.action + "时，闷头喝酒，谁也不用劝。");
    } else if (this.action == "恋爱") {
      console.log(this.constructor.name + "  " + this.action + "时，凡事不懂也要装懂。");
    }
  }
}

//
export class Woman extends Person {
  //得到结论或反应
  getConclusion() {
    if (this.action == "成功") {
      console.log(this.constructor.name + this.action + "时，背后大多有一个不成功的男人。");
    } else if (this.action == "失败") {
      console.log(this.constructor.name + this.action + "时，眼泪汪汪，谁也劝不了。");
    } else if (this.action == "恋爱") {
      console.log(this.constructor.name + this.action + "时，遇事懂也装作不懂。");
    }
  }
}
