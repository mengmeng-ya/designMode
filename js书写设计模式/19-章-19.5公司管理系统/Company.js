class Company {
  constructor(name) {
    this.name = name;
  }

  add() {} // 增加
  remove() {} // 移除
  display() {} // 显示
  lineOfDuty() {} // 履行职责
}

// 具体公司类 实现接口 树枝节点
export class ConcreteCompany extends Company {
  #children = new Set();
  constructor(name) {
    super(name);
  }

  add(company) {
    this.#children.add(company);
  }
  remove(company) {
    this.#children.delete(company);
  }
  display(depth) {
    console.log("-".repeat(depth) + this.name);
    this.#children.forEach((item) => {
      item.display(depth + 2);
    });
  }

  // 履行职责
  lineOfDuty() {
    this.#children.forEach((item) => {
      item.lineOfDuty();
    });
  }
}

// 人力资源部
export class HRDepartment extends Company {
  constructor(name) {
    super(name);
  }

  add(company) {}
  remove(company) {}
  display(depth) {
    console.log("-".repeat(depth) + this.name);
  }
  lineOfDuty() {
    console.log(this.name, "员工招聘培训管理");
  }
}

// 财务部
export class FinanceDepartment extends Company {
  constructor(name) {
    super(name);
  }

  add(company) {}
  remove(company) {}
  display(depth) {
    console.log("-".repeat(depth) + this.name);
  }
  lineOfDuty() {
    console.log(this.name, "公司财务收支管理");
  }
}
