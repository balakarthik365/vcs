// functions - Functions represent reusable blocks of code that can be executed when called.

function sqrt(num) {
  let result = Math.sqrt(num);
  return result;
}
console.log(sqrt(25));

//arrow functions
// Arrow functions provide a more concise syntax for writing functions in JavaScript. they are introduced in ES6 and are often used for shorter functions or callbacks.
//types of arrow functions
// 1. **Single Expression Arrow Function:**
const double = (num) => num * 2;
console.log(double(10));
// 2. **Block Body Arrow Function:**
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Alice");
// 3. **Implicit Return Arrow Function:**
const square = (num) => num * num;
console.log(square(5));
// 4. **Explicit Return Arrow Function:**
const cube = (num) => {
  return num * num * num;
};
console.log(cube(3));

//for and foreach
//loop is used to iterate over a block of code a number of times.
//for loop is used to execute a block of code a certain number of times, while forEach is used to iterate over elements in an array.
//foreach is a method available on arrays that allows you to execute a function for each element in the array.
const users = [
  { name: "Alice", email: "alice@example.com", age: 15 },
  { name: "Robert", email: "robert@example.com", age: 30 },
  { name: "Sophia", email: "sophia@example.com", age: 28 },
  { name: "James", email: "james@example.com", age: 22 },
  { name: "Isabella", email: "isabella@example.com", age: 16 },
  { name: "Daniel", email: "daniel@example.com", age: 27 },
  { name: "Olivia", email: "olivia@example.com", age: 29 },
  { name: "William", email: "william@example.com", age: 18 },
  { name: "Emma", email: "emma@example.com", age: 24 },
  { name: "Michael", email: "michael@example.com", age: 32 },
];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    console.log(users[i].name + " is an adult.");
  }
}
