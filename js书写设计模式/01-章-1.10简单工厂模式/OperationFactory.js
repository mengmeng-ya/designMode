import { OperationAdd, OperationSub, OperationMul, OperationDiv } from "./operation.js";

class OperationFactory {
  static createOperate(operate) {
    let oper = null;
    switch (operate) {
      case "+":
        oper = new OperationAdd();
        break;

      case "-":
        oper = new OperationSub();
        break;

      case "*":
        oper = new OperationMul();
        break;

      case "/":
        oper = new OperationDiv();
        break;
    }
    return oper;
  }
}

export default OperationFactory;
