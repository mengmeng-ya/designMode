import Person from "./Person.mjs";
import { TShirts, BigTrouser, Sneakers, Suit, Tie, LeatherShoes } from "./Finery.mjs";

let xc = new Person("小菜");

console.log("\n第一种装扮：");

let pqx = new Sneakers();
let kk = new BigTrouser();
let dtx = new TShirts();

pqx.Decorate(xc);
kk.Decorate(pqx);
dtx.Decorate(kk);
dtx.Show();

console.log("\n第二种装扮：");

let px = new LeatherShoes();
let ld = new Tie();
let xz = new Suit();

px.Decorate(xc);
ld.Decorate(px);
xz.Decorate(ld);
xz.Show();

console.log("\n第三种装扮：");
let pqx2 = new Sneakers();
let px2 = new LeatherShoes();
let kk2 = new BigTrouser();
let ld2 = new Tie();

pqx2.Decorate(xc);
px2.Decorate(pqx);
kk2.Decorate(px2);
ld2.Decorate(kk2);

ld2.Show();
