let amount = document.getElementById("amount");
let persons = document.getElementById("persons");
let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");
let showSplit = document.getElementById("showSplit");
splitAndCalculate = () => {
  if (amount.value != "" && persons.value != "") {
    let result = (amount.value / persons.value).toFixed(2);
    showSplit.innerText = `The amount per person is: RS. ${result}/-`;
    calculate.style.display = "none";
    clear.style.display = "block";
    amount.style.borderColor = "";
    persons.style.borderColor = "";
    showSplit.style.color = "green";
  } else {
    amount.style.borderColor = "red";
    persons.style.borderColor = "red";
    showSplit.style.color = "red";
    showSplit.innerText = `Please enter the amount & persons values to calculate!!`;
  }
};
clearCalc = () => {
  amount.value = "";
  persons.value = "";
  showSplit.innerText = "";
  calculate.style.display = "block";
  clear.style.display = "none";
};
let counter = 0;
let counterResult = document.getElementById("counterResult");
increment = () => {
  counter = counter + 1;
  counterResult.innerHTML = counter;
};
decrement = () => {
  if (counter > 0) {
    counter = counter - 1;
    counterResult.innerHTML = counter;
  }
};
