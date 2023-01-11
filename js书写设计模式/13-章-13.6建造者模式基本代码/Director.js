export class Director {
  construct(builder) {
    // 用来指挥建造过程
    builder.buildPartA();
    builder.buildPartB();
  }
}
