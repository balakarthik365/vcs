let arr = [1, 2, 3, 4, 5];
//map - array map is a method that creates a new array by applying a function to each element of the original array.
const squared = arr.map((element) => element * element);
console.log(squared);

const users = [
  { name: "Alice", email: "alice@example.com", age: 15, gender: "female" },
  { name: "Robert", email: "robert@example.com", age: 30, gender: "male" },
  { name: "Sophia", email: "sophia@example.com", age: 28, gender: "female" },
  { name: "James", email: "james@example.com", age: 22, gender: "male" },
  {
    name: "Isabella",
    email: "isabella@example.com",
    age: 16,
    gender: "female",
  },
  { name: "Daniel", email: "daniel@example.com", age: 27, gender: "male" },
  { name: "Olivia", email: "olivia@example.com", age: 29, gender: "female" },
  { name: "William", email: "william@example.com", age: 18, gender: "male" },
  { name: "Emma", email: "emma@example.com", age: 24, gender: "female" },
  { name: "Michael", email: "michael@example.com", age: 32, gender: "male" },
  { name: "Manoj", email: "michael@example.com", age: 32, gender: "male" },
];
console.log("maps:");
const filterdUsers = users.map((user) => {
  return user.name.concat(" is a user.");
});
const ittrUsers = () => {
  for (let i = 0; i < filterdUsers.length; i++) {
    console.log(filterdUsers[i]);
  }
};
ittrUsers();

//filter - array filter is a method that creates a new array with all elements that pass the test implemented by the provided function.
console.log("filter:");
const ageAbove18 = users.filter((user) => user.age >= 18);
console.log(ageAbove18);

//chaining - we can chain map and filter methods together to perform multiple operations on an array.
console.log("Chaining map and filter:");
const any = users
  .filter(
    (user) =>
      user.age >= 18 && user.gender == "male" && user.name.startsWith("M")
  )
  .map((user) => user.name);
console.log(any);
