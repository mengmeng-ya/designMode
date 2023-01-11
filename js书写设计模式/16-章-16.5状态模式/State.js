class State {
  handle(context) {}
}

export class ConcreteStateA extends State {
  handle(context) {
    context.state = new ConcreteStateB();
  }
}

export class ConcreteStateB extends State {
  handle(context) {
    context.state = new ConcreteStateA();
  }
}
