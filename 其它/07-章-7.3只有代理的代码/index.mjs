import Proxy from "./Proxy.mjs";
import SchoolGirl from "./SchoolGirl.mjs";

let jiaojiao = new SchoolGirl();
jiaojiao.Name = "李娇娇";

let daili = new Proxy(jiaojiao);

daili.GiveDolls();
daili.GiveFlowers();
daili.GiveChocolate();
