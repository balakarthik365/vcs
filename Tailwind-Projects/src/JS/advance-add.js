//shift - In js shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//unshift - In js unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//pop - In js pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//push - In js push() method adds one or more elements to the end of an array and returns the new length of the array.
//splice - In js splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//slice - In js slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // 1
console.log("shift()", arr); // [2, 3, 4, 5]
console.log(arr.unshift(0)); // 5
console.log("unshift()", arr); // [0, 2, 3, 4, 5]
console.log(arr.pop()); // 5
console.log("pop()", arr); // [0, 2, 3, 4]
console.log(arr.push(6)); // 5
console.log("push()", arr); // [0, 2, 3, 4, 6]

//slice - last value is not included in slice
let arr1 = ["a", "b", "c", "d", "e"];
arr1.slice(1, 3);
console.log(arr1);
console.log("slice(1, 3)", arr1.slice(1, 3)); // [ 'b', 'c' ]

//splice - first value is starting index, second value is number of elements to be removed, rest values are elements to be added
let arr2 = ["a", "b", "c", "d", "e"];
arr2.splice(1, 1, "x", "y");
console.log(arr2); // [ 'a', 'x', 'y', 'd', 'e' ]

//concat - In js concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log("concat()", c); // [ 1, 2, 3, 4, 5, 6 ]

//arrays and object destructuring
//destructuring array refers to the process of unpacking values from an array and assigning them to individual variables.
let arr3 = [1, 2, 3, 4, 5];
let [a1, a2] = arr3;
console.log("destructuring array", a1, a2); // 1 2

//destructuring object refers to the process of unpacking properties from an object and assigning them to individual variables. here variable names must match the property names of the object.
let obj = { name: "John", age: 30, email: "test@gmail.com" };
let { name, email } = obj;
console.log("destructuring object", name, email); // John 30

//spread operator - In js spread operator (...) is used to expand an iterable (like an array or string) into individual elements. It can be used in various contexts, such as function calls, array literals, and object literals.
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let arr6 = [...arr4, ...arr5];
console.log("spread operator for arrays", arr6); // [ 1, 2, 3, 4, 5, 6 ]

let obj1 = { name: "John", age: 30 };
let obj2 = { email: "test@gmail.com", phone: "1234567890" };
let obj3 = { ...obj1, ...obj2 };
console.log("spread operator for objects", obj3);

//reference data types - In js reference data types are objects and arrays.
// When you assign an object or array to a variable, you are assigning a reference to that object or array in memory, not the actual value.
// This means that if you change the object or array through one variable, the change will be reflected in all variables that reference that object or array.
// This is a shallow copy, meaning that nested objects or arrays are still referenced.
// shallow copy means it looks like a new object or array but it still references the original object or array in memory.
// To solve this we can use spread operator to create a new object or array. now when I use spread operator it creates a new object or array in memory.
let obj4 = { name: "John", age: 30, hobbies: ["reading", "traveling"] };
let obj5 = { ...obj4 }; // here obj5 is a new object in memory
obj4.hobbies.pop(); // here we are modifying the hobbies array in obj4 but it will also affect obj5 because hobbies is a reference data type
console.log("reference data types", obj4, obj5); // 31

let obj6 = {
  name: "John",
  age: 30,
  address: { city: "New York", state: "NY" },
};
let obj7 = JSON.parse(JSON.stringify(obj6)); // here obj7 is a new object in memory

obj7.name = "Jane"; // modifying primitive value in obj7. Now, this is the deep copy
console.log(obj6, obj7); // false

//toSpliced() - In js toSpliced() method returns a new array with some elements removed and/or replaced, without modifying the original array.
let arr7 = [1, 2, 3, 4, 5];
let newArr = arr7.toSpliced(1, 2, 6, 7);
console.log("toSpliced()", newArr); // [ 1, 6, 7, 4, 5 ]
console.log("original array", arr7); // [ 1, 2, 3, 4, 5 ]

//find - In js find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let arr8 = [1, 2, 3, 4, 5];
let found = arr8.find((element) => element > 3);
console.log("find()", found); // 4

//includes - In js includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let arr9 = [1, 2, 3, 4, 5];
let includes = arr9.includes(3);
console.log("includes()", includes); // true

//some - In js some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let arr10 = [1, 2, 3, 4, 5];
let some = arr10.some((element) => element > 5);
console.log("some()", some); // true

let arr1a = [1, 2, 3];
let arr2a = new Array(1, 2, 3);
arr1a.pop();
console.log(arr1a, arr2a);

let arra = [1, 2, 3];
let arrCopy = arra.slice(); // here arrCopy is a new array in memory and not a reference to arra. using .slice() to create a shallow copy of arra
arrCopy.push(4);
console.log(arra); // ?
console.log(arrCopy); // ?

//React JS & JavaScript Refresher
//arrow function - arrow function in js is a shorter syntax for writing functions. it does not have its own 'this', 'arguments', or 'super'. it is always anonymous.
//regular function - regular function in js is a traditional way of writing functions. it has its own 'this', 'arguments', and 'super'. it can be named or anonymous.
let add = (a, b) => a + b; // arrow function
console.log(add(2, 3)); // 5

//Template literals - In js template literals are string literals that allow embedded expressions. you can use multi-line strings and string interpolation features with them. they are enclosed by backticks (` `) instead of single or double quotes.
let name1 = "John";
let age1 = 30;
let message = `My name is ${name1} and I am ${age1} years old.`;
console.log(message); // My name is John and I am 30 years old.

//terenary operator - In js ternary operator is a conditional operator that takes three operands. it is used to evaluate a condition and return one of two values based on the result of the condition. the syntax is condition ? value1 : value2;
let age2 = 20;
let canVote = age2 >= 18 ? "Yes" : "No";
console.log(canVote); // Yes
