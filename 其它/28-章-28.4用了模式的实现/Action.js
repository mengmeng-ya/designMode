class Action {
  // 得到男人结论或反应
  getManConclusion(concreteElementA) {}
  // 得到女人结论或反应
  getWomanConclusion(concreteElementB) {}
}

//成功
export class Success extends Action {
  getManConclusion(concreteElementA) {
    console.log(
      "" +
        concreteElementA.constructor.name +
        this.constructor.name +
        "时，背后多半有一个伟大的女人。"
    );
  }
  getWomanConclusion(concreteElementB) {
    console.log(
      "" +
        concreteElementB.constructor.name +
        this.constructor.name +
        "时，背后大多有一个不成功的男人。"
    );
  }
}
//失败
export class Failing extends Action {
  getManConclusion(concreteElementA) {
    console.log(
      "" + concreteElementA.constructor.name + this.constructor.name + "时，闷头喝酒，谁也不用劝。"
    );
  }
  getWomanConclusion(concreteElementB) {
    console.log(
      "" + concreteElementB.constructor.name + this.constructor.name + "时，眼泪汪汪，谁也劝不了。"
    );
  }
}
//恋爱
export class Amativeness extends Action {
  getManConclusion(concreteElementA) {
    console.log(
      "" + concreteElementA.constructor.name + this.constructor.name + "时，凡事不懂也要装懂。"
    );
  }
  getWomanConclusion(concreteElementB) {
    console.log(
      "" + concreteElementB.constructor.name + this.constructor.name + "时，遇事懂也装作不懂。"
    );
  }
}
