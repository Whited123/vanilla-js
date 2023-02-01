const firstForm = document.querySelector(".firstform");
const firstBox = document.querySelector(".firstbox");
const secondForm = document.querySelector(".secondform");
const secondBox = document.querySelector(".secondbox");
const result = document.querySelector(".result");

function firstBoxInput() {
  const valuebox = firstBox.value;
  secondBox.setAttribute("max", valuebox);
}

firstForm.addEventListener("input", firstBoxInput);

function secondFormSubmit(event) {
  event.preventDefault();
  const valuebox = firstBox.value;
  const choosenum = secondBox.value;
  const randomnum = Math.ceil(Math.random() * valuebox);
  maderesult(choosenum, randomnum);
}

secondForm.addEventListener("submit", secondFormSubmit);

function maderesult(choosenum, randomnum) {
  if (parseInt(choosenum) === randomnum) {
    result.innerText = `you are ${choosenum}, computer choose ${randomnum}, you are win`;
  } else {
    result.innerText = `you are ${choosenum}, computer choose ${randomnum}, you are lose`;
  }
}
