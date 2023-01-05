import { Manager } from "./Manager.js";
import { Request } from "./Request.js";

let jinli = new Manager("金利");
let zongjian = new Manager("宗剑");
let zongjingli = new Manager("钟精励");

let request = new Request();
request.requestType = "加薪";
request.requestContent = "小菜请求加薪";
request.number = 1000;

jinli.getResult("经理", request);
zongjian.getResult("总监", request);
zongjingli.getResult("总经理", request);
