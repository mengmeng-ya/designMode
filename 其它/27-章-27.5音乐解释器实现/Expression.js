// 不知道写，暂时不写了

class Expression {
  // 解释器
  interpret(context) {
    if (context.playText.length == 0) {
      return;
    } else {
      let playKey = context.playText.substring(0, 1);
      context.playText = context.playText.substring(2);
    }
  }
}
