class Operation {
  #numberA = 0;
  #numberB = 0;
  get numberA() {
    return this.#numberA;
  }
  set numberA(newVal) {
    this.#numberA = newVal;
  }
  get numberB() {
    return this.#numberB;
  }
  set numberB(newVal) {
    this.#numberB = newVal;
  }
  getResult() {
    let result = 0;
    return result;
  }
}

// 加法类，继承运算类
export class OperationAdd extends Operation {
  constructor() {
    super();
  }
  getResult() {
    let result = 0;
    result = this.numberA + this.numberB;
    return result;
  }
}
// 减法类，继承运算类
export class OperationSub extends Operation {
  constructor() {
    super();
  }
  getResult() {
    let result = 0;
    result = this.numberA - this.numberB;
    return result;
  }
}
// 乘法类，继承运算类
export class OperationMul extends Operation {
  constructor() {
    super();
  }
  getResult() {
    let result = 0;
    result = this.numberA * this.numberB;
    return result;
  }
}
// 除法类，继承运算类
export class OperationDiv extends Operation {
  constructor() {
    super();
  }
  getResult() {
    let result = 0;
    if (this.numberB == 0) throw new Error("除数不能为0");
    result = this.numberA / this.numberB;
    return result;
  }
}

// 扩展运算类不需要拿到其他扩展的实现
export default Operation;
