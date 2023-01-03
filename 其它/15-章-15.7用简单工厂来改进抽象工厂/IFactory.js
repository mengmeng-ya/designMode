import { AccessDepartment, SqlserverDepartment } from "./IDepartment.js";
import { AccessUser, SqlserverUser } from "./IUser.js";

class IFactory {
  createUser() {}
  createDepartment() {}
}

export class SqlServerFactory extends IFactory {
  createUser() {
    return new SqlserverUser();
  }

  // 创建访问Department表对象的抽象的工厂接口。
  createDepartment() {
    return new SqlserverDepartment();
  }
}

export class AccessFactory extends IFactory {
  createUser() {
    return new AccessUser();
  }

  createDepartment() {
    return new AccessDepartment();
  }
}
