let hour = 0; // 钟点
let workFinished = false; // 任务完成标记
// 写程序方法
function writeProgram() {
  if (hour < 12) {
    console.log("当前时间：" + hour + "点 上午工作，精神百倍");
  } else if (hour < 13) {
    console.log("当前时间：" + hour + "点 饿了，午饭；犯困，午休。");
  } else if (hour < 17) {
    console.log("当前时间：" + hour + "点 下午状态还不错，继续努力");
  } else {
    if (workFinished) {
      console.log("当前时间：" + hour + "点 下班回家了");
    } else {
      if (hour < 21) {
        console.log("当前时间：" + hour + "点 加班哦，疲累之极");
      } else {
        console.log("当前时间：" + hour + "点 不行了睡着了");
      }
    }
  }
}

// 主程序如下
hour = 9;
writeProgram();
hour = 10;
writeProgram();
hour = 12;
writeProgram();
hour = 13;
writeProgram();
hour = 14;
writeProgram();
hour = 17;

workFinished = true;

writeProgram();
hour = 19;
writeProgram();
hour = 22;
writeProgram();
