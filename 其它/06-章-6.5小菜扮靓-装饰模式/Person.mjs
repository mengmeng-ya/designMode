class Person {
  constructor(name) {
    this.name = name;
  }

  Show() {
    process.stdout.write(`装扮的${this.name}\n`);
  }
}

export default Person;
