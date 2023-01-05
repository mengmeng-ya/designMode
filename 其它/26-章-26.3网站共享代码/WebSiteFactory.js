import { HashTable } from "./HashTable.js";
import { ConcreteWebSite } from "./WebSite.js";

// 网站工厂
export class WebSiteFactory {
  #flyweights = new HashTable();

  // 获得网站分类
  getWebSiteCategory(key) {
    if (!this.#flyweights.containsKey(key)) {
      this.#flyweights.add(key, new ConcreteWebSite(key));
    }
    return this.#flyweights.getValue(key);
  }

  // 获得网站分类总数
  getWebSiteCount() {
    return this.#flyweights.getSize();
  }
}
