import { Barbecuer } from "./Barbecuer.js";
import { BakeChickenWingConmmand, BakeMuttonCommand } from "./Command.js";
import { Waiter } from "./Waiter.js";

// 开店前的准备
let boy = new Barbecuer();
let bakeMuttonCommand1 = new BakeMuttonCommand(boy);
let bakeMuttonCommand2 = new BakeMuttonCommand(boy);
let bakeChickenWingConmmand1 = new BakeChickenWingConmmand(boy);
let girl = new Waiter();

// 开门营业
girl.setOrder(bakeMuttonCommand1);
girl.notify();
girl.setOrder(bakeMuttonCommand2);
girl.notify();
girl.setOrder(bakeChickenWingConmmand1);
girl.notify();
