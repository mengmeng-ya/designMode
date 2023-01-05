// 管理者
export class Manager {
  constructor(name) {
    this.name = name;
  }

  // 得到结果
  getResult(managerLevel, request) {
    if (managerLevel == "经理") {
      if (request.requestType == "请假" && request.number <= 2) {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
        );
      } else {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 我无权处理"
        );
      }
    } else if (managerLevel == "总监") {
      if (request.requestType == "请假" && request.number <= 5) {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
        );
      } else {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 我无权处理"
        );
      }
    } else if (managerLevel == "总经理") {
      if (request.requestType == "请假") {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
        );
      } else if (request.requestType == "加薪" && request.number <= 500) {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
        );
      } else if (request.requestType == "加薪" && request.number > 500) {
        console.log(
          this.name + " : " + request.requestContent + " 数量" + request.number + " 再说吧"
        );
      }
    }
  }
}
