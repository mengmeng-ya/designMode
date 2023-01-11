import { ConcreteBuilder1, ConcreteBuilder2 } from "./Builder.js";
import { Director } from "./Director.js";

let director = new Director();
let b1 = new ConcreteBuilder1();
let b2 = new ConcreteBuilder2();

director.construct(b1);
let p1 = b1.getResult();
p1.show();

director.construct(b2);
let p2 = b2.getResult();
p2.show();
