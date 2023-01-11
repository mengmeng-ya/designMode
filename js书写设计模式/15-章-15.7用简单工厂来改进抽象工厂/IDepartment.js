// 部门表接口，用于客户端访问，解除与具体数据库访问的耦合
class IDepartment {
  insert(department) {}
  getDepartment(id) {}
}

export class SqlserverDepartment extends IDepartment {
  insert(department) {
    console.log("在SQL server 中给 Department 表增加一条记录");
  }

  getDepartment(id) {
    console.log("在SQL Server 中根据id得到Department表一条记录");
    return null;
  }
}

export class AccessDepartment extends IDepartment {
  insert(department) {
    console.log("在Access中给 Department 表增加一条记录");
  }
  getDepartment(id) {
    console.log("在Access中根据ID得到Department表一条记录");
    return null;
  }
}
