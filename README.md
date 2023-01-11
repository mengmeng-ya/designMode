大话设计模式，使用 js 代码书写。

缓慢更新中，如果有侵权的话，希望能告诉我。

/////
面对对象的分析设计编程思想，通过 封装、继承、多态 把程序的耦合度降低，

设计模式
是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验总结。
使用设计模式是为了让代码更容易被他人理解， 灵活，容易修改，并且易于复用。

简单工厂模式

策略模式：
它定义了算法家族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化，
不会影响到使用算法的客户。

装饰模式：
动态地给一个对象添加一些额外的职责，就增加功能来说，装饰模式比生成子类更为灵活。

代理模式：
为其他对象提供一种代理以控制对这个对象的访问。

工厂方法模式：
定义一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。

原型模式

模板方法模式：
定义一个操作中的算法骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

外观模式：
为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用

建造者模式：
将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

观察者模式：
观察者模式又叫做 发布-订阅模式
定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。
这个主题对象在状态发生变化时，会通知所有的观察者对象，使它们能够自动更新自己。

抽象工厂模式：
提供一个创建一系列相关或互相依赖对象的接口，而无需指定它们具体的类

状态模式：
当一个对象的内在状态改变时允许改变其行为，这个对象看起来像是改变了其类
状态模式主要解决的是当控制一个对象状态转换的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类当中，可以把复杂的判断逻辑简化。

适配器模式：
将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

备忘录模式：
在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。

组合模式：
将对象组合成树形结构以表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

迭代器模式：
提供一种方法顺序访问一个聚合对象中各个元素，而又不暴露该对象的内部表示

单例模式：
保证一个类仅有一个实例，并提供一个访问它的全局访问点。全局有且只有一个

桥接模式：
将抽象部分与它的实现部分分离，使它们都可以独立地变化

命令模式：
将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作。

责任链模式：
使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止

中介者模式：
用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显示的相互引用，从而使其耦合松散，而且可以独立的改变它们之间的交互

享元模式：
运用共享技术有效的支持大量细粒度的对象

解释器模式：
给定一个语言，定义它的文件的一种表示，并定义一个解释器，这个解释器使用该表示来解释语言中的句子。

访问者模式：
表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作

### 面向对象七大原则

- 单一职责原则：就一个类而言，应该仅有一个引起它变化的原因
- 开放封闭原则：对象或实体应该对扩展开放，对修改封闭。
- 里氏代换原则： 子类型必须能够替换掉它们的父类型
- 依赖倒置原则：高层模块不应该依赖于低层模块，他们都应该依赖于抽象。抽象不应该依赖细节，细节应该依赖抽象。
- 迪米特法则:一个对象应当对其他对象有尽可能少的了解,不和陌生人说话。如果两个类不必彼此直接通信，那么这两个类就不应当发生直接的相互作用。如果其中一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用。

- 接口隔离原则：客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。
- 组合/聚合复用原则：合成（Composition，也有翻译成组合）和聚合（Aggregation），都是关联的特殊种类。聚合表示一种弱的“拥有”关系，体现的是 A 对象可以包含 B 对象，但 B 对象不是 A 对象的一部分；合成（组合）是一种强的“拥有”关系，体现了严格的部分与整体的关系，部分和整体的生命周期是一样的。
