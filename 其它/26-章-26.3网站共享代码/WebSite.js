class WebSite {
  use() {}
}

export class ConcreteWebSite extends WebSite {
  #name = "";
  constructor(name) {
    super();
    this.#name = name;
  }
  use() {
    console.log("网站分类：" + this.#name);
  }
}
