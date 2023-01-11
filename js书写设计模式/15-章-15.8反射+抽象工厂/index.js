// 抽象工厂模式
// 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
import { DataAccess } from "./DataAccess.js";
import { Department } from "./Department.js";
import { User } from "./User.js";

let user = new User();
let dept = new Department();

let iu = DataAccess.createUser();
iu.insert(user);
iu.getUser(1);

let id = DataAccess.createDepartment();
id.insert(dept);
id.getDepartment(1);
