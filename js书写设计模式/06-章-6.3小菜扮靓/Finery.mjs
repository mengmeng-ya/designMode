// 服饰
class Finery {
  Show() {}
}

// 子类
export class TShirts extends Finery {
  Show() {
    process.stdout.write("大T恤 ");
  }
}

export class BigTrouser extends Finery {
  Show() {
    process.stdout.write("垮裤 ");
  }
}

export class Sneakers extends Finery {
  Show() {
    process.stdout.write("破球鞋 ");
  }
}

export class Suit extends Finery {
  Show() {
    process.stdout.write("西装 ");
  }
}

export class Tie extends Finery {
  Show() {
    process.stdout.write("领带 ");
  }
}

export class LeatherShoes extends Finery {
  Show() {
    process.stdout.write("皮鞋 ");
  }
}
