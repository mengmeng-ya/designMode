// 简单工厂模式

import OperationFactory from "./OperationFactory.js";

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
strResult = oper.getResult();

console.log(strResult);
