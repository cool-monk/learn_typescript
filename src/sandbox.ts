// const character = "mario";

// console.log(character);
// console.log("yo yo bantai rapper");

// const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//   console.log(input);
// });

// TYPES

let character = "mario";
// character=25 error
let age = 25;
// age = 'string' error
let isEligible = true;

character = "new Mario";

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));

// OBJECTS AND ARRAY
let names = ["rajiv", "ram", "hari"];
names.push("gopal");
// names.push(43); error
names[0] = "ranjan";
// names[0] = 4; error

let mixedArray = ["ram", 65, false];
mixedArray.push("gopal");
mixedArray.push(45);
mixedArray.push(true);

let fighter = {
  name: "rajiv",
  belt: "black",
  age: 25,
  isEligible: true,
};

// fighter = "what" // error

// fighter.address = 'india' //error

// fighter = {
//   name: "new name",
//   age: 45,
// }; // error one property missing

// EXPLICIT TYPES
let newName: string;

newName = "only string allowed";

let fighters: string[] = [];
fighters.push("new Fighter");
let newFighters: any[];

// union types
let newGenFighters: (string | number)[];

let uid: number | string;

let ninjaOne: object;
ninjaOne = {
  name: "name",
  age: 45,
};

let ninjsTwo: {
  name: string;
  age: number;
  isEligible: boolean;
};

// FUNCTIONS

let greet = () => {
  console.log("hello");
};

let newGreet: Function;
newGreet = () => {
  console.log("Thois is alowed but assigning other than function raise error");
};

let add = (a: number, b: number, c: number | string = 10) => {
  // cannot pass default parameter as well as ?: optional things together
  const sum = a + b;
  console.log("sum", sum, c);
  return sum;
};

// Esplicit return type
let minus = (a: number, b: number): number => {
  //can have void or any
  return a + b;
};

// TYPE ALIAS
type StringOrNum = string | number;
type User = {
  name: string;
  uuid: StringOrNum;
  email: string;
};

type ReturnObj = {
  error: string;
  success: any;
};

const setUserDetails = (user: User): ReturnObj => {
  console.log(user);
  return {
    error: "Something went wrong",
    success: "anything can be here",
  };
};

// setUserDetails({ name: "rajiv", uuid: "jjhh", email: "some@gmail.com" });

// Function signatures
let namaste: (a: string, b: string) => void;

namaste = (name, address) => {
  console.log(`Hello ${name} ${address} waale`);
};

// namaste("rajiv", "delhi");

let logDetail: (obj: User) => void;

logDetail = (user) => {
  console.log(user);
};

logDetail({
  name: "rajiv",
  uuid: "jjhhlkajsd;lfkja;ldsfjaslkd",
  email: "some@gmail.com",
});
