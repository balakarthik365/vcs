// Javascript - Is a synchronous and a single threaded language
// Synchronous - One thing at a time. ex - console.log, for loop
// Single Threaded - One command/task at a time
// Asynchronous - Multiple things at a time. ex - setTimeout, fetch, promises, async/await
// Multi Threaded - Multiple commands/tasks at a time
// main stack/call stack/execution stack - where the code is executed
//side stack/call back queues - where the asynchronous code is executed
//event loop - checks if the main stack is empty and if it is empty then it takes the first thing from the side stack and pushes it to the main stack
//Why we need async code in JS?
// Async code in javascript is used to perform long network requests without blocking the main thread
//ex - fetching data from an API, reading files, writing files, setTimeout, setInterval
//call back - this functions are executed after the completion of a task
//promise - a promise is an object that may produce a single value in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending
//async/await - async function is a function that is declared with the async keyword and the await keyword is used to wait for a promise to be resolved before moving to the next line of code
//fetch - fetch is a built in function in javascript that is used to make network requests. It returns a promise that resolves to the response of the request
//API - Application Programming Interface - a set of rules that allows different software entities to communicate with each other

const fetchRandomUsers = async () => {
  let data = await fetch("https://randomuser.me/api");
  let parseData = await data.json();
  let userImg = document.getElementById("userImg");
  let userName = document.getElementById("userName");
  let emailId = document.getElementById("emailId");
  let location = document.getElementById("location");
  let phone = document.getElementById("phone");
  phone.innerText = `${parseData.results[0].phone}`;
  location.innerText = `${parseData.results[0].location.city}, ${parseData.results[0].location.country}`;
  emailId.innerText = `${parseData.results[0].email}`;
  userName.innerText = `${parseData.results[0].name.title} ${parseData.results[0].name.first} ${parseData.results[0].name.last}`;
  userImg.setAttribute("src", parseData.results[0].picture.large);
  console.log(parseData.results[0]); 
};
fetchRandomUsers();
