// let btn = document.getElementById("btn");
//innerText - will get the text of target id we define.
//addEventListners - target the event, handle the event and task
//querySelector - select the element with tag or class(.) or id(#)
//querySelectorAll - selects all the elements with all tags or classes(.) or ids(#)
// test = () => {
//   console.log("test invoked");
// };
// btn.addEventListener(
//   "click",
//   (test = (e) => {
//     console.log(e.target.innerText, "button clicked");
//   })
// );
let btns = document.querySelectorAll(".py-2");
console.log(btns);
btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.innerText, "clicked");
    e.target.disabled = true;
    e.target.classList.remove(
      "hover:bg-white",
      "hover:text-black",
      "hover:border",
      "hover:border-neutral-200",
      "hover:cursor-pointer"
    );
    e.target.classList.add(
      "bg-neutral-100",
      "text-netral-400",
      "hover:bg-neutral-100",
      "hover:shadow-none",
      "hover:shadow-netral-0",
      "hover:border-transparent"
    );
  });
});
//onmouse in
//onmouse out
//onchange
//onkeyup
//scroll
//load
let loader = document.querySelector("#loader");
let showImage = document.querySelector("#showImage");
let showBtns = document.querySelector("#showBtns");
showImage.classList.add("hidden");
showBtns.classList.add("hidden");
loader.classList.add("loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    showImage.classList.remove("hidden");
    showBtns.classList.remove("hidden");
    loader.classList.remove("loader");
    showImage.classList.add("flex");
    showBtns.classList.add("flex");
    console.log("load event listener");
  }, 2000);
});
let showHelper = document.querySelector("#showHelper");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    showHelper.classList.remove("scale-0");
    showHelper.classList.remove("hidden");
  } else {
    showHelper.classList.add("scale-0");
    showHelper.classList.add("hidden");
  }
});
