class AbstractExpression {
  interpret(context) {}
}

export class TerminalExpression extends AbstractExpression {
  interpret(context) {
    console.log("终端解释器");
  }
}

export class NonterminalExpression extends AbstractExpression {
  interpret(context) {
    console.log("非终端解释器");
  }
}
