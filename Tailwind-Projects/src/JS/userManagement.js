let newArray = [];
let showDiv = document.getElementById("showDiv");
let showErrMsg = document.getElementById("showErrMsg");
let row = document.getElementById("addRow");
addUsers = () => {
  row.innerHTML = "";
  let userName = document.getElementById("userName");
  let userEmail = document.getElementById("userEmail");
  let users = {
    name: userName.value,
    email: userEmail.value,
  };
  if (userName.value != "" && userEmail.value != "") {
    showErrMsg.classList.add("hidden");
    showErrMsg.innerHTML = "";
    let ifUserExist = checkUsers(userEmail.value);
    console.log(ifUserExist);
    if (!ifUserExist) {
      newArray.push(users);
      showErrMsg.classList.remove("hidden");
      showErrMsg.classList.remove("border-red-200");
      showErrMsg.classList.remove("bg-red-100");
      showErrMsg.classList.remove("text-red-600");
      showErrMsg.classList.add("border-green-200");
      showErrMsg.classList.add("bg-green-100");
      showErrMsg.classList.add("text-green-600");
      showErrMsg.innerHTML = "Added New User!";
      showDiv.classList.remove("hidden");
    } else {
      showErrMsg.classList.remove("hidden");
      showErrMsg.innerHTML = "User Already exists!";
      showErrMsg.classList.remove("border-green-200");
      showErrMsg.classList.remove("bg-green-100");
      showErrMsg.classList.remove("text-green-600");
      showErrMsg.classList.add("border-red-200");
      showErrMsg.classList.add("bg-red-100");
      showErrMsg.classList.add("text-red-600");
    }
    newArray.length > 0
      ? showDiv.classList.remove("hidden")
      : showDiv.classList.add("hidden");
    renderUser(users);
  } else {
    showErrMsg.classList.remove("hidden");
    showErrMsg.innerHTML = "Please enter the user name and email to continue.";
  }
};
checkUsers = (email) => {
  let user = newArray.some((element) => {
    return element.email == email;
  });
  return user;
};
renderUser = () => {
  newArray.forEach((element, index) => {
    const tr = document.createElement("tr");
    tr.classList.add("text-neutral-950");
    tr.classList.add("bg-neutral-50");
    tr.classList.add("text-lg");
    tr.innerHTML = `
    <td class="px-5 py-3 text-sm whitespace-nowrap text-left">${element.name}</td>
    <td class="px-5 py-3 text-sm whitespace-nowrap text-left">${element.email}</td>
    <td class="px-5 py-3 text-sm whitespace-nowrap text-left">
    <div class="rounded-full border border-red-700 p-2 inline-block text-red-700 hover:cursor-pointer hover:bg-red-800 hover:text-white shadow-md shadow-neutral-300" onclick="deleteUser(${index})">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
    </svg></div>
    </td>
    `;
    row.appendChild(tr);
  });
};
deleteUser = (index) => {
  newArray.splice(index, 1);
  row.innerHTML = "";
  renderUser();
};
