import { UndergraduateFactory } from "./IFactory.mjs";
import { Undergraduate } from "./LeiFeng.mjs";
import { SimpleFactory } from "./SimpleFactory.mjs";

let xueleifeng = new Undergraduate();
xueleifeng.BuyRice();
xueleifeng.Sweep();
xueleifeng.Wash();

let student1 = new Undergraduate();
student1.BuyRice();
let student2 = new Undergraduate();
student2.Sweep();
let student3 = new Undergraduate();
student3.Wash();

console.log("--------简单工厂模式---------");
let studentA = SimpleFactory.createLeiFeng("学雷锋的大学生");
studentA.BuyRice();
let studentB = SimpleFactory.createLeiFeng("学雷锋的大学生");
studentB.Sweep();
let studentC = SimpleFactory.createLeiFeng("学雷锋的大学生");
studentC.Wash();

console.log("--------工厂方法模式---------");
let factory = new UndergraduateFactory();
let student = factory.CreateLeiFeng();
student.BuyRice();
student.Sweep();
student.Wash();
