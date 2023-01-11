import Person from "./Person.mjs";

// 服饰类
class Finery extends Person {
  constructor(component) {
    super();
    this.component = component;
  }
  Decorate(component) {
    this.component = component;
  }
  Show() {
    if (this.component != null) {
      this.component.Show();
    }
  }
}

// 具体服饰类
export class TShirts extends Finery {
  Show() {
    process.stdout.write("大T恤 ");
    super.Show();
  }
}

export class BigTrouser extends Finery {
  Show() {
    process.stdout.write("垮裤 ");
    super.Show();
  }
}

export class Sneakers extends Finery {
  Show() {
    process.stdout.write("破球鞋 ");
    super.Show();
  }
}

export class Suit extends Finery {
  Show() {
    process.stdout.write("西装 ");
    super.Show();
  }
}

export class Tie extends Finery {
  Show() {
    process.stdout.write("领带 ");
    super.Show();
  }
}

export class LeatherShoes extends Finery {
  Show() {
    process.stdout.write("皮鞋 ");
    super.Show();
  }
}
