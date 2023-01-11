import { Undergraduate, Volunteer } from "./LeiFeng.mjs";

// 雷锋工厂接口
class IFactory {
  CreateLeiFeng() {}
}

// 学雷锋的大学生工厂
export class UndergraduateFactory extends IFactory {
  CreateLeiFeng() {
    return new Undergraduate();
  }
}

// 社区志愿者工厂
export class VolunteerFactory extends IFactory {
  CreateLeiFeng() {
    return new Volunteer();
  }
}
