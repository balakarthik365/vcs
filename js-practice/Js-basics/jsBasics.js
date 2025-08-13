let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];
//1. **Accessing Specific Value:**
//     - Write JavaScript code to fetch the first item in the grocery items list.
console.log(shoppingList[0]);
// 2. **Implementing `push` Method:**
//     - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
shoppingList.push("Carrots");
console.log(shoppingList);
// 3. **Implementing `pop` Method:**
//     - Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after the removal.
shoppingList.pop();
console.log(shoppingList);
// 4. **Implementing `splice` Method:**
//     - Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place. Log the updated grocery items list before and after the splice operation.
shoppingList[4].splice(1, 2);
console.log(shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};
console.log(student);
// 1. **Fetching Specific Value:**
//     - Write JavaScript code to fetch the student's name.
console.log(student.name);
// 2. **Adding Value:**
//     - Write JavaScript code to add a new property **`phone`** with the value **`"123-456-7890"`** to the student object. Log the updated student object.
student.phone = "+91-9876543210";
console.log(student);
// 3. **Removing Value:**
//     - Write JavaScript code to remove the **`grade`** property from the student object. Log the updated student object before and after the removal.
delete student.grade;
console.log(student);
// 4. **Modifying Value:**
//     - Write JavaScript code to modify the student's age to **`21`**. Log the updated student object.
student.age = 21;
console.log(student);

// - **Task 1: Understanding `if` Statements:**
//     - Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
let checkNumber = "";
function number(num) {
  console.log(num);
  if (num > 0) {
    checkNumber = "positive";
  }
  if (num < 0) {
    checkNumber = "negative";
  }
  if (num == 0) {
    checkNumber = "zero";
  }
  return checkNumber;
}
console.log(number(-4));

// - **Task 2: Implementing `else if` Statements:**
//     - Create a JavaScript program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.
let grade = "";
function getMarks(marks) {
  console.log(marks);
  if (marks >= 90 && marks <= 100) {
    grade = "A";
  } else if (marks >= 80 && marks < 89) {
    grade = "B";
  } else if (marks >= 70 && marks < 79) {
    grade = "C";
  } else if (marks >= 60 && marks < 69) {
    grade = "D";
  } else if (marks < 60) {
    grade = "F";
  } else {
    grade = "Invalid Marks";
  }
  return grade;
}
console.log(getMarks(59.5));

// - **Task 3: Exploring Truthy/Falsy Concepts:**
//     - Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.
function checkTruthyFalse(val) {
  if (val) {
    return true; // if the value is truthy
  } else {
    return false; // if the value is falsy
  }
}
console.log(checkTruthyFalse("")); // should return true
