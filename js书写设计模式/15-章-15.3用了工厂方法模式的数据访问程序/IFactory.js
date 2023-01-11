import { SqlserverUser, AccessUser } from "./IUser.js";

class IFactory {
  createUser() {}
}

export class SqlServerFactory extends IFactory {
  createUser() {
    return new SqlserverUser();
  }
}

export class AccessFactory extends IFactory {
  createUser() {
    return new AccessUser();
  }
}
