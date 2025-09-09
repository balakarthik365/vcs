let nameInput = document.querySelector("#userName");
let button = document.querySelector("#inputBtn");
let showUser = document.querySelector("#showUser");
let showInputs = document.querySelector("#showInputs");
// localStorage.clear();

checkUser = () => {
  let checkUser = "name" in localStorage;
  if (checkUser) {
    console.log("User already exist");
    showInputs.classList.add("hidden");
    showUser.innerText = localStorage.getItem("name");
  } else {
    showInputs.classList.remove("hidden");
  }
};
checkUser();
button.addEventListener("click", () => {
  if (nameInput.value != "") {
    localStorage.setItem("name", nameInput.value);
    checkUser();
  } else {
    console.log("Please enter the value (or) check if user already exist");
  }
});
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterDiv = document.querySelector("#counterDiv");
// sessionStorage.clear();
increment.addEventListener("click", () => {
  let counter = parseInt(sessionStorage.getItem("counter")) || 0;
  counter = counter + 1;
  sessionStorage.setItem("counter", counter);
  updateCounter();
});
decrement.addEventListener("click", () => {
  let counter = parseInt(sessionStorage.getItem("counter")) || 0;
  counter = counter - 1;
  sessionStorage.setItem("counter", counter);
  updateCounter();
});
updateCounter = () => {
  let counter = parseInt(sessionStorage.getItem("counter")) || 0;
  counterDiv.innerHTML = counter;
};
updateCounter();
