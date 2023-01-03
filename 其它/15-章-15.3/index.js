import { User } from "./User.js";
import { SqlServerFactory } from "./IFactory.js";

let user = new User();
let factory = new SqlServerFactory();
let iu = factory.createUser();

iu.insert(user);
iu.getUser();
