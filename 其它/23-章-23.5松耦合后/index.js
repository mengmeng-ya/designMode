import { Barbecuer } from "./Barbecuer.js";
import { BakeChickenWingConmmand, BakeMuttonCommand } from "./Command.js";
import { Waiter } from "./Waiter.js";

// 开店前的准备
let boy = new Barbecuer();
let bakeMuttonCommand1 = new BakeMuttonCommand(boy);
let bakeMuttonCommand2 = new BakeMuttonCommand(boy);
let bakeChickenWingConmmand1 = new BakeChickenWingConmmand(boy);
let girl = new Waiter();

// 开门营业 顾客点菜
girl.setOrder(bakeMuttonCommand1);
girl.setOrder(bakeMuttonCommand2);
girl.setOrder(bakeChickenWingConmmand1);

// 点菜完毕，通知厨房
girl.notify();
