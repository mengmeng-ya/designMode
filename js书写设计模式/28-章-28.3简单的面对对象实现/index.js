import { Man, Woman } from "./Person.js";

let persons = new Set();

let man1 = new Man();
man1.action = "成功";
persons.add(man1);
let woman1 = new Woman();
woman1.action = "成功";
persons.add(woman1);

let man2 = new Man();
man2.action = "失败";
persons.add(man2);
let woman2 = new Woman();
woman2.action = "失败";
persons.add(woman2);

let man3 = new Man();
man3.action = "恋爱";
persons.add(man3);
let woman3 = new Woman();
woman3.action = "恋爱";
persons.add(woman3);

persons.forEach((item) => {
  item.getConclusion();
});
