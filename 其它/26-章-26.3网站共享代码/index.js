import { WebSiteFactory } from "./WebSiteFactory.js";

let f = new WebSiteFactory();

let fx = f.getWebSiteCategory("产品展示");
fx.use();

console.log("网站分类总数为 " + f.getWebSiteCount());
