// 管理者
class Manager {
  constructor(name) {
    this.name = name;
    this.superior = null;
  }

  // 设置管理者的上级
  setSuperior(superior) {
    this.superior = superior;
  }

  // 申请请求
  requestApplications(request) {}
}

// 经理
export class CommonManager extends Manager {
  constructor(name) {
    super(name);
  }
  requestApplications(request) {
    if (request.requestType == "请假" && request.number <= 2) {
      console.log(
        this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
      );
    } else {
      // 其余的请求都需转到上级
      if (this.superior != null) this.superior.requestApplications(request);
    }
  }
}

// 总监
export class Majordomo extends Manager {
  constructor(name) {
    super(name);
  }
  requestApplications(request) {
    if (request.requestType == "请假" && request.number <= 5) {
      console.log(
        this.name + " : " + request.requestContent + " 数量" + request.number + " 被批准"
      );
    } else {
      // 其余的请求都需转到上级
      if (this.superior != null) this.superior.requestApplications(request);
    }
  }
}

// 总经理
export class GeneralManager extends Manager {
  constructor(name) {
    super(name);
  }
  requestApplications(request) {
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
