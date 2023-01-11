class Operation {
  static GetResult(numberA, numberB, operate) {
    let result = 0;
    switch (operate) {
      case "+":
        result = numberA + numberB;
        break;
      case "-":
        result = numberA - numberB;
        break;
      case "*":
        result = numberA * numberB;
        break;
      case "/":
        result = numberA / numberB;
        break;
    }
    return result;
  }
}

export default Operation;
