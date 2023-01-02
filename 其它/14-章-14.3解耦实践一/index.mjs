import { Secretary } from "./Secretary.mjs";
import { StockObserver, NBAObserver } from "./Observer.mjs";

// 前台小姐姐童子喆
let tongzizhe = new Secretary();

// 看股票的同事
let tongshi1 = new StockObserver("同事1", tongzizhe);
let tongshi2 = new NBAObserver("同事2", tongzizhe);

// 前台记下了两位同事
tongzizhe.Attach(tongshi1);
tongzizhe.Attach(tongshi2);

// 发现老板回来
tongzizhe.action = "老板回来了！";

// 通知两同事
tongzizhe.Notify();
