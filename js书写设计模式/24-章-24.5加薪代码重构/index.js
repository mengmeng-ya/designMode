import { CommonManager, GeneralManager, Majordomo } from "./Manager.js";
import { Request } from "./Request.js";

let jinli = new CommonManager("金利");
let zongjian = new Majordomo("宗剑");
let zongjingli = new GeneralManager("钟精励");
jinli.setSuperior(zongjian);
zongjian.setSuperior(zongjingli);

let request = new Request();
request.requestType = "加薪";
request.requestContent = "小菜请求加薪";
request.number = 1000;

jinli.requestApplications(request);
