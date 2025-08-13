//arrays and objects
//arrays are used to store multiple values in a single variable
let items = ["apple", "banana", "orange"];
console.log(items);
items.push("grape"); // push will add grape to the end of the array
items.pop(); // pop will removes the last item from the array
//splice - has 3 parameters -   // 1st - index from where to start removing, 2nd - how many items to remove, 3rd - item to add
items.splice(0, 0, "blueberry");
console.log(items);

let list = [
  ["milk", "bread", "eggs"],
  ["apple", "banana", "orange"],
];
console.log(list);
list[1][0] = "grape"; // changing the first item of the second array
console.log(list);

console.log(typeof list); // will return object, because arrays are converted to objects in JS and then it is stored in the heap memory.

//objects are used to store data in key-value pairs. we can access, modify, and delete properties of an object using dot notation or bracket notation.
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  hobbies: ["reading", "gaming", "gymming"],
};
user.name = "Jane"; // changing the name property of the object
user.age = 25; // changing the age property of the object
user.hobbies.push("cooking"); // adding a new hobby to the hobbies array
user.hobbies.pop(); // adding a new hobby to the hobbies array
delete user.isAdmin; // deleting the isAdmin property from the object
console.log(user);

//array of objects
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Robert", email: "robert@example.com" },
  { name: "Sophia", email: "sophia@example.com" },
  { name: "James", email: "james@example.com" },
  { name: "Isabella", email: "isabella@example.com" },
  { name: "Daniel", email: "daniel@example.com" },
  { name: "Olivia", email: "olivia@example.com" },
  { name: "William", email: "william@example.com" },
  { name: "Emma", email: "emma@example.com" },
  { name: "Michael", email: "michael@example.com" },
];
let random = Math.floor(Math.random() * users.length); // generating a random number between 0 and the length of the users array
console.log(users[random].name);

//conditional statements
// in js we have if, else if, and else statements to control the flow of the program based on certain conditions.
let age = 24;
if ("age >= 18") {
  // this is a string, so it will always evaluate to true as it is a truthy value
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}
//truthy and falsy values in JS
//falsy values are values that evaluate to false in a boolean context. These include: false, 0, "", null, undefined, and NaN.
//apart from falsy values, all other values are considered truthy values in JS.
// && and || operators
// && operator returns true if both operands are truthy, otherwise it returns false.
// || operator returns true if at least one operand is truthy, otherwise it returns false.
if (age >= 14 && age <= 19) {
  console.log("You are a playing the junior level.");
} else if (age >= 20 && age <= 24) {
  console.log("You are a playing the senior level.");
} else {
  console.log("You are not eligible to participate.");
}

//ternary operator
//the ternary operator is a shorthand for if-else statements. It takes three operands:
//a condition, a value if the condition is true, and a value if the condition is false.
let isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult);

//=== operator
//the === operator checks for both value and data type equality. It is a strict equality operator.
