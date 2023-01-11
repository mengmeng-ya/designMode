import { User } from "./User.js";
import { WebSiteFactory } from "./WebSiteFactory.js";

let f = new WebSiteFactory();

let fx = f.getWebSiteCategory("产品展示");
fx.use(new User("小菜"));

let fy = f.getWebSiteCategory("产品展示");
fy.use(new User("大鸟"));

let fz = f.getWebSiteCategory("产品展示");
fz.use(new User("娇娇"));

let fl = f.getWebSiteCategory("博客");
fl.use(new User("老顽童"));

let fm = f.getWebSiteCategory("博客");
fm.use(new User("桃谷六仙"));

let fn = f.getWebSiteCategory("博客");
fn.use(new User("南海鳄神"));

console.log("得到网站分类总数为 " + f.getWebSiteCount());
