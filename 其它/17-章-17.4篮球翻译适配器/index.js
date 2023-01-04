import { Center, Forwards, Guards, Translator } from "./Player.js";

let b = new Forwards("巴蒂尔");
b.attack();
let m = new Guards("麦克格雷迪");
m.attack();

// let ym = new Center("姚明");
let ym = new Translator("姚明");
ym.attack();
ym.defense();
