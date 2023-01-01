import Person from "./Person.mjs";
import { TShirts, BigTrouser, Sneakers, Suit, Tie, LeatherShoes } from "./Finery.mjs";

let xc = new Person("小菜");

console.log("\n第一种装扮：");

let dtx = new TShirts();
let kk = new BigTrouser();
let pqx = new Sneakers();

dtx.Show();
kk.Show();
pqx.Show();
xc.Show();

console.log("\n第二种装扮：");

let xz = new Suit();
let ld = new Tie();
let px = new LeatherShoes();

xz.Show();
ld.Show();
px.Show();
xc.Show();
