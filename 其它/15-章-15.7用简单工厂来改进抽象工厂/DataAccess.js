import { AccessDepartment, SqlserverDepartment } from "./IDepartment.js";
import { AccessUser, SqlserverUser } from "./IUser.js";

export class DataAccess {
  static db = "Sqlserver";
  // static db = "Access";

  static createUser() {
    let result = null;
    switch (DataAccess.db) {
      case "Sqlserver":
        result = new SqlserverUser();
        break;

      case "Access":
        result = new AccessUser();
        break;
    }
    return result;
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
