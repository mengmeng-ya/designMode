import Person from "./Person.mjs";

let xc = new Person("小菜");

console.log("\n第一种装扮：");

xc.WearTShirts();
xc.WearBigTrouser();
xc.WearSneakers();
xc.Show();

console.log("\n第二种装扮：");

xc.WearSuit();
xc.WearTie();
xc.WearLeatherShoes();
xc.Show();
