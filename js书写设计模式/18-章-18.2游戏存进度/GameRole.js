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
}
