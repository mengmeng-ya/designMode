import { User } from "./User.mjs";

class SqlserverUser {
  insert(user) {
    console.log("在SQL Server中给user表增加一条记录");
  }
  getUser(id) {
    console.log("在SQL Server中根据id得到user表一条记录");
    return null;
  }
}

let user = new User();
console.log(user);
let su = new SqlserverUser();

su.insert(user);
su.getUser(1);
