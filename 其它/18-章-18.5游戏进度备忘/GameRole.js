import { RoleStateMemento } from "./RoleStateMemento.js";

export class GameRole {
  // 生命力
  #vitality;
  get vitality() {
    return this.#vitality;
  }
  set vitality(newVal) {
    this.#vitality = newVal;
  }

  // 攻击力
  #attack;
  get attack() {
    return this.#attack;
  }
  set attack(newVal) {
    this.#attack = newVal;
  }
  // 防御力
  #defense;
  get defense() {
    return this.#defense;
  }
  set defense(newVal) {
    this.#defense = newVal;
  }

  // 状态显示
  stateDisplay() {
    console.log("角色当前状态：");
    console.log("体力：" + this.vitality);
    console.log("攻击力：" + this.attack);
    console.log("防御力：" + this.defense);
    console.log("");
  }

  // 获得初始状态
  getInitState() {
    this.vitality = 100;
    this.attack = 100;
    this.defense = 100;
  }

  // 战斗
  fight() {
    this.vitality = 0;
    this.attack = 0;
    this.defense = 0;
  }

  // 保存角色状态,将游戏角色的三个状态值通过实例化“角色存储箱”返回
  saveState() {
    return new RoleStateMemento(this.vitality, this.attack, this.defense);
  }

  // 恢复角色状态，可将外部的“角色状态存储箱”中状态值恢复给游戏角色
  recoveryState(memento) {
    this.vitality = memento.vitality;
    this.attack = memento.attack;
    this.defense = memento.defense;
  }
}
