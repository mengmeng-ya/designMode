import Context from "./Context.mjs";
import { ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC } from "./Strategy.mjs";

let context;

context = new Context(new ConcreteStrategyA());
context.ContextInterface();

context = new Context(new ConcreteStrategyB());
context.ContextInterface();

context = new Context(new ConcreteStrategyC());
context.ContextInterface();
