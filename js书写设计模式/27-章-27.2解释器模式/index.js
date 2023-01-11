import { NonterminalExpression, TerminalExpression } from "./AbstractExpression.js";
import { Context } from "./Context.js";

let context = new Context();
let list = new Set();
list.add(new TerminalExpression());
list.add(new NonterminalExpression());
list.add(new TerminalExpression());
list.add(new TerminalExpression());

list.forEach((item) => {
  item.interpret(context);
});
