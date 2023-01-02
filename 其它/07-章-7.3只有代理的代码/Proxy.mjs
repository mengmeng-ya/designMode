// 代理类
class Proxy {
  constructor(mm) {
    this.mm = mm;
  }

  GiveDolls() {
    console.log(this.mm.Name + "送你洋娃娃");
  }

  GiveFlowers() {
    console.log(this.mm.Name + "送你鲜花");
  }
  GiveChocolate() {
    console.log(this.mm.Name + "送你巧克力");
  }
}

export default Proxy;
