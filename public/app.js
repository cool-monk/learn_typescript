import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector(".new-item-form");
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
// INPUTS
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
var ResourceType;
(function (ResourceType) {
    ResourceType["BOOK"] = "book";
    ResourceType["AUTHOR"] = "author";
    ResourceType["FILM"] = "film";
    ResourceType["PERSON"] = "person";
    ResourceType["LAPTOP"] = "laptop";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 111,
    resourceName: ResourceType.BOOK,
    data: "this time string",
};
const docFour = {
    uid: 4324,
    resourceName: ResourceType.FILM,
    data: ["what", "is", "this"],
};
console.log(docFour);
// TUPLES : Lets define the specific type at the specific position of the array
let tup = ["rajiv", "ranjan", 25, true];
