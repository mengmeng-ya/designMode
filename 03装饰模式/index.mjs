// 装饰模式是利用SetComponent来对对象进行包装的。这样每个装饰对象的实现就和如何使用这个对象分离开了，每个装饰对象只关心自己的功能，不需要关心如何被添加到对象链当中
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
