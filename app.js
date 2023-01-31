const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const hiddenOfHidden = "hidden";
const USERNAME_KEY = "username";

function logInSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(hiddenOfHidden);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(hiddenOfHidden);
}

if (savedUsername === null) {
  loginForm.classList.remove(hiddenOfHidden);
  loginForm.addEventListener("submit", logInSubmit);
} else {
  paintGreetings();
}
