import { Caretaker } from "./Caretaker.js";
import { Originator } from "./Originator.js";

let o = new Originator();
o.state = "On";
o.show();

let c = new Caretaker();
c.memento = o.createMemento();

o.state = "Off";
o.show();

o.setMementto(c.memento);
o.show();
