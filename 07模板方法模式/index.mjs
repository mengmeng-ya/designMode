// 模板方法模式是通过把不变的行为搬移到超类，去除子类中重复代码来体现它的优势

class AbstractClass {
  // 抽象方法，放到子类去实现
  PrimitiveOperation1() {
    throw new Error("");
  }
  PrimitiveOperation2() {
    throw new Error("");
  }
  TemplateMethod() {
    // 模板方法，给出了逻辑的骨架，而逻辑的组成是一些相应的抽象操作，它们都推迟到子类实现
    this.PrimitiveOperation1();
    this.PrimitiveOperation2();
    console.log("");
  }
}

class ConcreteClassA extends AbstractClass {
  PrimitiveOperation1() {
    console.log("具体类A方法1实现");
  }
  PrimitiveOperation2() {
    console.log("具体类A方法2实现");
  }
}

class ConcreteClassB extends AbstractClass {
  PrimitiveOperation1() {
    console.log("具体类B方法1实现");
  }
  PrimitiveOperation2() {
    console.log("具体类B方法2实现");
  }
}

// 客户端调用
let c;
c = new ConcreteClassA();
c.TemplateMethod();

c = new ConcreteClassB();
c.TemplateMethod();
