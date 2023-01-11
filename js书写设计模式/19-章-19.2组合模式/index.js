import { Composite, Leaf } from "./Component.js";

// 生成树根root，根上长出两叶 LeafA LeafB
let root = new Composite("root");
root.add(new Leaf("Leaf A"));
root.add(new Leaf("Leaf B"));

let comp1 = new Composite("Composite X");
comp1.add(new Leaf("Leaf XA"));
comp1.add(new Leaf("Leaf XB"));

root.add(comp1);

let comp2 = new Composite("Composite XY");
comp2.add(new Leaf("Leaf XYA"));
comp2.add(new Leaf("Leaf XYB"));

comp1.add(comp2);

root.add(new Leaf("Leaf C"));

let leaf = new Leaf("Leaf D");
root.add(leaf);
root.remove(leaf);

root.display(1);
