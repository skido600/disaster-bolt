export default function Signin() {
  const eyeOff =
    "../img/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
  const eyeOn = "../img/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

  // Selections
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const eyemain = document.getElementById("eye_main"); // Ensure this matches your HTML
  const signInBtn = document.getElementById("submit");

  // Error display elements
  const usernameError = document.getElementById("username_error");
  const emailError = document.getElementById("email_error");
  const passwordError = document.getElementById("error_password");

  // Event listeners
  eyemain.addEventListener("click", togglePasswordVisibility);
  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
  });

  // Password toggle function
  function togglePasswordVisibility() {
    if (password.type === "password") {
      password.type = "text";
      eyemain.src = eyeOn;
    } else {
      password.type = "password";
      eyemain.src = eyeOff;
    }
  }

  // Validate username function
  function validateUsername() {
    const value = username.value.trim();
    if (value === "") {
      usernameError.textContent = "Username can't be empty";
    } else if (value.length < 4) {
      usernameError.textContent = "Username can't be less than four characters";
    } else {
      usernameError.textContent = "";
    }
  }

  // Email validation
  function validateEmail() {
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
      emailError.textContent = "Email can't be empty";
    } else if (!emailRegex.test(value)) {
      emailError.textContent = "Invalid email address";
    } else {
      emailError.textContent = "";
    }
  }

  // Validate password function
  function validatePassword() {
    const value = password.value.trim();
    if (value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
    } else {
      passwordError.textContent = "";
    }
  }
}
