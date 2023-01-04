// 客户端代码

import { GameRole } from "./GameRole.js";

// 大战Boss前
let lixiaoyao = new GameRole();

// 获得初始角色状态
lixiaoyao.getInitState();
lixiaoyao.stateDisplay();

// 保存进度
// 通过 “游戏角色” 的新实例，来保存进度
let backup = new GameRole();
backup.vitality = lixiaoyao.vitality;
backup.attack = lixiaoyao.attack;
backup.defense = lixiaoyao.defense;

// 大战Boss时，损耗严重。所有数据全部损耗为零
lixiaoyao.fight();
lixiaoyao.stateDisplay();

// 恢复之前状态，重新来玩
lixiaoyao.vitality = backup.vitality;
lixiaoyao.attack = backup.attack;
lixiaoyao.defense = backup.defense;

lixiaoyao.stateDisplay();
