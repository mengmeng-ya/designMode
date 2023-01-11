class Component {
  Operation() {}
}

class ConcreteComponent extends Component {
  Operation() {
    console.log("具体对象的操作");
  }
}

class Decorator extends Component {
  constructor() {
    super();
  }
  SetComponent(component) {
    this.component = component;
  }

  Operation() {
    if (this.component != null) {
      // 重写 Operation()
      this.component.Operation();
    }
  }
}

class ConcreteDecoratorA extends Decorator {
  #addedState = ""; // 本类独有的功能，以区别于ConcreteDecoratorA
  constructor() {
    super();
  }
  Operation() {
    super.Operation();
    this.#addedState = "New State";
    console.log("具体装饰对象A的操作");
  }
}

class ConcreteDecoratorB extends Decorator {
  constructor() {
    super();
  }
  Operation() {
    super.Operation();
    this.AddedBehavior();
    console.log("具体装饰对象B的操作");
  }
  AddedBehavior() {
    // 本类独有的方法，以区别于ConcreteDecoratorA
  }
}

export { ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB };
