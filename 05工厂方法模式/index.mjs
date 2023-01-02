import { AddFactory } from "./IFactory.mjs";

let operFactory = new AddFactory();
let oper = operFactory.CreateOperation();
oper.numberA = 1;
oper.numberB = 2;
let result = oper.GetResult();

console.log(result);
