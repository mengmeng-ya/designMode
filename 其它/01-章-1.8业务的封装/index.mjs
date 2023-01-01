// 该文件阐释了封装
// 页面是页面，计算是计算
import Operation from "./operation.mjs";

let strNumberA = 1;
let strOperate = "+";
let strNumberB = 1;
let strResult;

strResult = Operation.GetResult(strNumberA, strNumberB, strOperate);
console.log(strResult);
