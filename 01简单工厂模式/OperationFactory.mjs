import { OperationAdd, OperationSub, OperationMul, OperationDiv } from "./operation.mjs";

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

      default:
        throw "没有这个分支";
        break;
    }
    return oper;
  }
}

export default OperationFactory;
