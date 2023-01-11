class Component {
  constructor(name) {
    this.name = name;
  }

  // 通常都用 Add 和 Remove 方法来提供增加或移除树叶或树枝的功能
  add(component) {}
  remove(component) {}
  display(depth) {}
}

// Leaf在组合中表示叶节点对象，叶节点没有子节点。
export class Leaf extends Component {
  constructor(name) {
    super(name);
  }

  // 由于叶子没有再增加分枝和树叶，所以 add 和 remove 方法实现它没有意义，但这样做可以消除叶节点和枝节点对象在抽象层次的区别，它们具备完全一致的接口
  add(component) {
    console.log("Cannot add to a leaf");
  }
  remove(component) {
    console.log("Cannot remove from a leaf");
  }
  // 叶节点的具体方法，此处是显示其名称和级别
  display(depth) {
    console.log(new String("-".repeat(depth)) + this.name);
  }
}

// Composite定义有枝节点行为，用来存储子部件，在Component接口中实现与子部件有关的操作，比如增加Add和删除Remove。
export class Composite extends Component {
  // 一个子对象集合用来存储其下属的枝节点和叶节点
  #children = new Set();
  constructor(name) {
    super(name);
  }

  add(component) {
    this.#children.add(component);
  }
  remove(component) {
    this.#children.delete(component);
  }
  display(depth) {
    // 显示其枝节点名称，并对其下级进行遍历
    console.log("-".repeat(depth) + this.name);
    this.#children.forEach((item) => {
      item.display(depth + 2);
    });
  }
}
