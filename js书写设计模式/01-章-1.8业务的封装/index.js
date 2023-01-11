// 将页面逻辑与计算逻辑分离
import Operation from "./operation.js";

let strNumberA = 1;
let strOperate = "+";
let strNumberB = 1;
let strResult;

strResult = Operation.GetResult(strNumberA, strNumberB, strOperate);
console.log(strResult);
