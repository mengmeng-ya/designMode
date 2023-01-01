import { ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB } from "./Component.mjs";

let c = new ConcreteComponent();
let d1 = new ConcreteDecoratorA();
let d2 = new ConcreteDecoratorB();

d1.SetComponent(c);
d2.SetComponent(d1);
d2.Operation();

console.log(c);
console.log(d1);
console.log(d2);
