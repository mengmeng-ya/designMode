import { NBAObserver, StockObserver } from "./Observer.mjs";
import { Boss } from "./Subject.mjs";

let huhansan = new Boss();

// 看股票的同事
let tongshi1 = new StockObserver("同事1", huhansan);
// 看NBA的同事
let tongshi2 = new NBAObserver("同事2", huhansan);

huhansan.addEventHandler(tongshi1.CloseStockMarket);
huhansan.addEventHandler(tongshi2.CloseNBADirectSeeding);

// 老板回来
huhansan.subjectState = "我胡汉三回来了";
// 发出通知
huhansan.notify();
