// 抽象工厂模式
// 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
import { Department } from "./Department.js";
import { AccessFactory, SqlServerFactory } from "./IFactory.js";
import { User } from "./User.js";

let user = new User();
let dept = new Department();

// 只需确定实例化哪一个数据库访问对象
let factory = new SqlServerFactory();
// let factory = new AccessFactory();

// 此时以与具体的数据库访问解除了依赖
let iu = factory.createUser();

iu.insert(user);
iu.getUser(1);

// 此时以与具体的数据库访问解除了依赖
let id = factory.createDepartment();
id.insert(dept);
id.getDepartment(1);
