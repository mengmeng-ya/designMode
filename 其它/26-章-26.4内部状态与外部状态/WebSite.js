// 网站抽象类
class WebSite {
  use(user) {}
}

// 具体网站类
export class ConcreteWebSite extends WebSite {
  #name = "";
  constructor(name) {
    super();
    this.#name = name;
  }
  use(user) {
    console.log("网站分类：" + this.#name + "用户：" + user.name);
  }
}
