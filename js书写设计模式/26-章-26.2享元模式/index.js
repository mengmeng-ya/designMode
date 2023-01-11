import { UnsharedConcreteFlyweight } from "./Flyweight.js";
import { FlyweightFactory } from "./FlyweightFactory.js";

let extrinsicstate = 22;

let f = new FlyweightFactory();

let fx = f.getFlyweight("X");
fx.operation(--extrinsicstate);
let fy = f.getFlyweight("Y");
fy.operation(--extrinsicstate);
let fz = f.getFlyweight("Z");
fz.operation(--extrinsicstate);

let uf = new UnsharedConcreteFlyweight();
uf.operation(--extrinsicstate);
