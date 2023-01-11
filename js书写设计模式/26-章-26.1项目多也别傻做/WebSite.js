export class WebSite {
  #name = "";
  constructor(name) {
    this.#name = name;
  }
  use() {
    console.log("网站分类：" + this.#name);
  }
}
