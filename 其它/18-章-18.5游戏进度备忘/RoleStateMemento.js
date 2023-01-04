// 角色状态存储箱
export class RoleStateMemento {
  #vitality; // 生命力
  #attack; // 攻击力
  #defense; // 防御力
  constructor(vit, atk, def) {
    // 将生命力、攻击力、防御力存入状态存储箱对象中
    // 这里赋值是直接赋值给私有值好呢？还是赋值给set好呢
    this.#vitality = vit;
    this.#attack = atk;
    this.#defense = def;
  }

  get vitality() {
    return this.#vitality;
  }
  set vitality(newVal) {
    this.#vitality = newVal;
  }

  get attack() {
    return this.#attack;
  }
  set attack(newVal) {
    this.#attack = newVal;
  }

  get defense() {
    return this.#defense;
  }
  set defense(newVal) {
    this.#defense = newVal;
  }
}
