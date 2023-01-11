import { Context } from "./Context.js";
import { ConcreteStateA } from "./State.js";

let c = new Context(new ConcreteStateA());

c.request();
c.request();
c.request();
c.request();
