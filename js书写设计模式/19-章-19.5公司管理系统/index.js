import { ConcreteCompany, FinanceDepartment, HRDepartment } from "./Company.js";

let root = new ConcreteCompany("北京总公司");
root.add(new HRDepartment("总公司人力资源部"));
root.add(new FinanceDepartment("总公司财务部"));

let comp1 = new ConcreteCompany("上海华东分公司");
comp1.add(new HRDepartment("华东分公司人力资源部"));
comp1.add(new FinanceDepartment("华东分公司财务部"));
root.add(comp1);

let comp2 = new ConcreteCompany("南京办事处");
comp2.add(new HRDepartment("南京办事处人力资源部"));
comp2.add(new FinanceDepartment("南京办事处财务部"));
comp1.add(comp2);

let comp3 = new ConcreteCompany("杭州办事处");
comp3.add(new HRDepartment("杭州办事处人力资源部"));
comp3.add(new FinanceDepartment("杭州办事处财务部"));
comp1.add(comp3);

console.log("结构图：");
root.display(1);

console.log("职责：");
root.lineOfDuty();
