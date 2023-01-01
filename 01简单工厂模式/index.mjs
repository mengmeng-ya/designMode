// 大致意思是是这个方法增加分支不需要拿到其他分支的实现
// 更灵活的修改和扩展

import OperationFactory from "./OperationFactory.mjs";

// 输入值
// let strNumberA = 1;
// let strOperate = "/";
// let strNumberB = 2;

// 结果
let strResult;

let oper;
oper = OperationFactory.createOperate("/");
oper.numberA = 1;
oper.numberB = 2;
strResult = oper.GetResult();

console.log(strResult);
