export class Context {
  #input;
  get input() {
    return this.#input;
  }
  set input(newVal) {
    this.#input = newVal;
  }

  #output;
  get output() {
    return this.#output;
  }
  set output(newVal) {
    this.#output = newVal;
  }
}
