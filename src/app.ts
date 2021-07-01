import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

// Interface practice
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Rajiv", "Spent on milk", 2500);
// docTwo = new Payment("shubham", "spent on milk", 2300);

// let alldocs: HasFormatter[] = [];
// alldocs.push(docOne);
// alldocs.push(docTwo);
// console.log(alldocs);

// let invoice: Invoice[] = [];
// const anchor = document.querySelector("a")!;
// console.log(anchor?.href);

// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form")! as HTMLFormElement;
const ul = document.querySelector(".item-list")! as HTMLUListElement;
const list = new ListTemplate(ul);
// INPUTS
const type = document.querySelector("#type")! as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

enum ResourceType {
  BOOK = "book",
  AUTHOR = "author",
  FILM = "film",
  PERSON = "person",
  LAPTOP = "laptop",
}

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<string> = {
  uid: 111,
  resourceName: ResourceType.BOOK,
  data: "this time string",
};

const docFour: Resource<string[]> = {
  uid: 4324,
  resourceName: ResourceType.FILM,
  data: ["what", "is", "this"],
};

console.log(docFour);

// TUPLES : Lets define the specific type at the specific position of the array
let tup: [string, string, number, boolean] = ["rajiv", "ranjan", 25, true];
