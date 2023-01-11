import { OperationAdd, OperationSub, OperationMul, OperationDiv } from "./operation.mjs";

// 工厂接口
class IFactory {
  CreateOperation() {}
}

// 加法类工厂
export class AddFactory extends IFactory {
  CreateOperation() {
    return new OperationAdd();
  }
}
export class SubFactory extends IFactory {
  CreateOperation() {
    return new OperationSub();
  }
}
export class MulFactory extends IFactory {
  CreateOperation() {
    return new OperationMul();
  }
}
export class DivFactory extends IFactory {
  CreateOperation() {
    return new OperationDiv();
  }
}
