// 角色状态管理者
export class RoleStateCaretaker {
  #memento;
  get memento() {
    return this.#memento;
  }
  set memento(newVal) {
    this.#memento = newVal;
  }
}
