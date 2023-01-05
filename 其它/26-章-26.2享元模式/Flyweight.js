class Flyweight {
  operation(extrinsicstate) {}
}

export class ConcreteFlyweight extends Flyweight {
  operation(extrinsicstate) {
    console.log("具体Flyweight:" + extrinsicstate);
  }
}

export class UnsharedConcreteFlyweight extends Flyweight {
  operation(extrinsicstate) {
    console.log("不共享的具体Flyweight:" + extrinsicstate);
  }
}
