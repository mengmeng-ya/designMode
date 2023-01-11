class Operation {
  constructor() {
    this.numberA = 0;
    this.numberB = 0;
  }
  GetResult() {
    let result = 0;
    return result;
  }
}

// 加法类，继承运算类
export class OperationAdd extends Operation {
  constructor() {
    super();
  }
  GetResult() {
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
  GetResult() {
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
  GetResult() {
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
  GetResult() {
    let result = 0;
    if (this.numberB == 0) throw new Error("除数不能为0");
    result = this.numberA / this.numberB;
    return result;
  }
}

export default Operation;
