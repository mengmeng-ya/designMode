import { ForeignCenter } from "./ForeignCenter.js";

// 球员
class Player {
  constructor(name) {
    this.name = name;
  }
  // 进攻和防守方法
  attack() {}
  defense() {}
}

// 后卫、中锋，前锋类
// 前锋
export class Forwards extends Player {
  constructor(name) {
    super(name);
  }

  attack() {
    console.log("前锋" + this.name + "进攻");
  }
  defense() {
    console.log("前锋" + this.name + "防守");
  }
}

// 中锋
export class Center extends Player {
  constructor(name) {
    super(name);
  }

  attack() {
    console.log("中锋" + this.name + "进攻");
  }
  defense() {
    console.log("中锋" + this.name + "防守");
  }
}

// 后卫
export class Guards extends Player {
  constructor(name) {
    super(name);
  }

  attack() {
    console.log("后卫" + this.name + "进攻");
  }
  defense() {
    console.log("后卫" + this.name + "防守");
  }
}

// 翻译者
export class Translator extends Player {
  constructor(name) {
    super(name);
    this.wjzf = new ForeignCenter();
    this.wjzf.name = name;
  }

  attack() {
    this.wjzf.进攻();
  }

  defense() {
    this.wjzf.防守();
  }
}
