import { Undergraduate, Volunteer } from "./LeiFeng.mjs";

// 简单雷锋工厂
export class SimpleFactory {
  static createLeiFeng(type) {
    let result = null;
    switch (type) {
      case "学雷锋的大学生":
        result = new Undergraduate();
        break;
      case "社区志愿者":
        result = new Volunteer();
      default:
        break;
    }
    return result;
  }
}
