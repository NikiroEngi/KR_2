const form = document.querySelector(".form-container");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

const showPassword = document.querySelector("#showPassword");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const terms = document.querySelector("#terms");
const submitButton = document.querySelector(".submit-button");

const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const termsError = document.querySelector("#termsError");

//*===================================== ник =====================================*\\
function validateUsername() {
  if (username.value.trim() === "") {
    showError(usernameError, "The field can't be empty");
  } else {
    hideError(usernameError);
  }
}
//*===================================== ник_2 =====================================*\\
function mailToName() {
  console.log("errors");
  if (username.value.trim() === "") {
    console.log("errors if");
    username.value = email.value.split("@")[0];
  } else {
    username.value = "invalid";
  }
}

//*============================================= мейл =============================================*\\
function validateEmail() {
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showError(emailError, "Enter a valid e-mail address");
  } else {
    hideError(emailError);
  }
}

//*=============== пароль ===============*\\
function validatePassword() {
  if (password.value.length < 5) {
    showError(passwordError, "Password must be at least 5 characters long");
  } else if (!/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
    showError(
      passwordError,
      "The password must contain at least one capital letter and one number"
    );
  } else {
    hideError(passwordError);
  }
}

//*=============== конфёрм ===============*\\
function validateConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    showError(
      confirmPasswordError,
      "Password and password confirmation do not match"
    );
  } else {
    hideError(confirmPasswordError);
  }
}

//*=============== политика ===============*\\
function validateTerms() {
  if (!terms.checked) {
    showError(termsError, "You must agree to the terms and conditions");
  } else {
    hideError(termsError);
  }
}

//*=============== кнопка ===============*\\
function updateSubmitButtonState() {
  const isValid =
    username.value.trim() !== "" &&
    email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
    password.value.length >= 5 &&
    /[A-Z]/.test(password.value) &&
    /\d/.test(password.value) &&
    confirmPassword.value === password.value &&
    terms.checked;

  submitButton.disabled = !isValid;
}

//*=============== для пароля ===============*\\
function togglePasswordVisibility() {
  const type = password.type === "password" ? "password" : "text";
  password.type = type;
  confirmPassword.type = type;
}
//*=============== я уже заманался ===============*\\

//*=============== errors ===============*\\
function showError(element, message) {
  element.textContent = message;
  element.style.display = "block";
}

function hideError(element) {
  element.style.display = "none";
}

//*=============== Слушатели ===============*\\
username.addEventListener("input", () => {
  validateUsername();
  updateSubmitButtonState();
});

email.addEventListener("input", () => {
  validateEmail();
  updateSubmitButtonState();
});

password.addEventListener("input", () => {
  validatePassword();
  updateSubmitButtonState();
});

confirmPassword.addEventListener("input", () => {
  validateConfirmPassword();
  updateSubmitButtonState();
});

terms.addEventListener("change", () => {
  validateTerms();
  updateSubmitButtonState();
});
///////////////////////////////////////////
email.addEventListener("blur", () => {
  mailToName();
});

//*===================== нечто в разработке =====================*\\
form.addEventListener("submit", (event) => {
  //working
  event.preventDefault();
  const redirectURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  window.location.href = redirectURL;
});

//TODO
document.addEventListener("DOMContentLoaded", () => {
  togglePasswordVisibility();
});
showPassword.addEventListener("change", () => {
  togglePasswordVisibility();
});

//*===================== Мемы =====================*\\

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

function showPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

setTimeout(showPopup, 5000);

closeBtn.addEventListener("click", closePopup);

window.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopup();
  }
});
