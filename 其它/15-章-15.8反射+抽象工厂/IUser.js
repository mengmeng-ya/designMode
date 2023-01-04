class IUser {
  insert() {}
  getUser() {}
}

export class SqlserverUser extends IUser {
  insert(user) {
    console.log("在SQL Server中给User表增加一条记录");
  }

  getUser(id) {
    console.log("在SQL Server中根据ID得到User表一条记录");
    return null;
  }
}

export class AccessUser extends IUser {
  insert(user) {
    console.log("在Access中给User表增加一条记录");
  }
  getUser(id) {
    console.log("在Access中根据ID得到User表一条记录");
    return null;
  }
}
