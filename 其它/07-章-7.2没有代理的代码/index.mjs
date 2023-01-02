import Pursuit from "./Pursuit.mjs";
import SchoolGirl from "./SchoolGirl.mjs";

let jiaojiao = new SchoolGirl();
jiaojiao.Name = "李娇娇";

let zhuojiayi = new Pursuit(jiaojiao);

zhuojiayi.GiveDolls();
zhuojiayi.GiveFlowers();
zhuojiayi.GiveChocolate();
