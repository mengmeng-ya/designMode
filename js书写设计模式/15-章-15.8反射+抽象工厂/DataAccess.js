import { AccessDepartment, SqlserverDepartment } from "./IDepartment.js";
import * as IUser from "./IUser.js";

export class DataAccess {
  // static db = "Sqlserver";
  static db = "Access";

  static createUser() {
    console.log(process.env.DB);
    // 原文是说将程序由编译时转为运行时，但是js，不知道有没有这个概念
    // 这样写的好处是省略了 switch
    return new IUser[DataAccess.db + "User"]();
  }

  static createDepartment() {
    let result = null;
    switch (DataAccess.db) {
      case "Sqlserver":
        result = new SqlserverDepartment();

        break;
      case "Access":
        result = new AccessDepartment();
    }
    return result;
  }
}
