class Person {
  constructor(name) {
    this.name = name;
  }
  WearTShirts() {
    process.stdout.write("大T恤 ");
  }
  WearBigTrouser() {
    process.stdout.write("垮裤 ");
  }
  WearSneakers() {
    process.stdout.write("破球鞋 ");
  }
  WearSuit() {
    process.stdout.write("西装 ");
  }
  WearTie() {
    process.stdout.write("领带 ");
  }
  WearLeatherShoes() {
    process.stdout.write("皮鞋 ");
  }
  Show() {
    process.stdout.write(`装扮的${this.name}\n`);
  }
}

export default Person;
