import { StockObserver, NBAObserver } from "./Observer.mjs";
import { Boss, Secretary } from "./Subject.mjs";

// 老板胡汉三
let huhansan = new Boss();
// 前台小姐姐童子喆
let tongzizhe = new Secretary();

// 看股票的同事
let tongshi1 = new StockObserver("同事1", tongzizhe);
// 看NBA的同事
let tongshi2 = new NBAObserver("同事2", huhansan);
let tongshi3 = new NBAObserver("同事3", huhansan);

// 前台记下同事
tongzizhe.attach(tongshi1);
// 老板记下同事
huhansan.attach(tongshi2);
huhansan.attach(tongshi3);

// 忘记同事
huhansan.detach(tongshi2);

// 发现老板回来
tongzizhe.subjectState = "老板回来了！";
huhansan.subjectState = "我胡汉三回来了！";

// 通知同事
tongzizhe.notify();
huhansan.notify();
