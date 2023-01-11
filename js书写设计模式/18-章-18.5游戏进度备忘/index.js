// 客户端代码
import { GameRole } from "./GameRole.js";
import { RoleStateCaretaker } from "./RoleStateCaretaker.js";

// 大战Boss前
let lixiaoyao = new GameRole();

// 获得初始角色状态
lixiaoyao.getInitState();
lixiaoyao.stateDisplay();

// 保存进度
let stateAdmin = new RoleStateCaretaker();
stateAdmin.memento = lixiaoyao.saveState();

// 大战Boss时，损耗严重。所有数据全部损耗为零
lixiaoyao.fight();
lixiaoyao.stateDisplay();

// 恢复之前状态，重新来玩
lixiaoyao.recoveryState(stateAdmin.memento);
lixiaoyao.stateDisplay();
