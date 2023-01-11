// 部门表
export class Department {
  #_id;
  #_deptName;
  get id() {
    return this.#_id;
  }
  set id(newVal) {
    this.#_id = newVal;
  }
  get deptName() {
    return this.#_deptName;
  }
  set deptName(newVal) {
    this.#_deptName = newVal;
  }
}
