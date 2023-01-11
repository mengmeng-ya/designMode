import Context from "./Context.js";
import { ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC } from "./Strategy.js";

let context;

context = new Context(new ConcreteStrategyA());
context.contextInterface();

context = new Context(new ConcreteStrategyB());
context.contextInterface();

context = new Context(new ConcreteStrategyC());
context.contextInterface();
