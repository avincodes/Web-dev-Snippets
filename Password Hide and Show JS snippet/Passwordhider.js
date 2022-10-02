// This Code Snippet is made by using Javascript and you can use this snippet in your Projects ,where you have to make any log in page.
// Thank You.


let password = document.getElementById("password");
let random_password = document.querySelector(".random_password");
var passwordLength = 14;
var passwordVal = "";

window.onload = function loadPassword() {
  let randomGenerateChars = "B&vp3hSMQQsu#sR2+mTJx6kf6kHhHk^nNceWW_$=tEG#";

  for (var i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * randomGenerateChars.length);
    passwordVal += randomGenerateChars.substring(
      randomNumber,
      randomNumber + 1
    );
  }
  random_password.innerHTML = passwordVal;
};

var state = false;

function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

function myFunction(show) {
  show.classList.toggle("fa-eye-slash");
}
password.addEventListener("focus", function () {
  if (password.value === "") {
    random_password.style.display = "block";
  }
});
random_password.addEventListener("click", function () {
  password.value = passwordVal;
  random_password.style.display = "none";
});
