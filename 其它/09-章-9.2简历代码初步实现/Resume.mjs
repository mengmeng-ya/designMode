// 简历
export class Resume {
  constructor(name) {
    this.name = name;
  }
  // 设置个人信息
  SetPersonalInfo(sex, age) {
    this.sex = sex;
    this.age = age;
  }

  // 设置工作经历
  SetWorkExperience(timeArea, company) {
    this.timeArea = timeArea;
    this.company = company;
  }

  // 显示
  Display() {
    console.log("" + this.name + this.sex + this.age);
    console.log("工作经历" + this.timeArea + this.company);
  }
}
