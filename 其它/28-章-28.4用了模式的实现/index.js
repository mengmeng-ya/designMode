import { Amativeness, Failing, Success } from "./Action.js";
import { ObjectStructure } from "./ObjectStructure.js";
import { Man, WoMan } from "./Person.js";

let o = new ObjectStructure();
o.attach(new Man());
o.attach(new WoMan());

// 成功时的反应
let v1 = new Success();
o.display(v1);

// 失败时反应
let v2 = new Failing();
o.display(v2);

// 恋爱时反应
let v3 = new Amativeness();
o.display(v3);
