function Login() {
  const eyeOff =
    "../img/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
  const eyeOn = "../img/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

  // Selections
  const username_login = document.getElementById("username_two");
  const password_login = document.getElementById("password_two");
  const eye_main = document.getElementById("eye_two");
  const signInBtn = document.getElementById("Login_submit");

  // Error display elements
  let error_username = document.getElementById("error_username");
  let error_password = document.getElementById("error_password");

  // Event listeners
  eye_main.addEventListener("click", togglePasswordVisibility);
  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validateUsername();
    validatePassword();
  });

  // Password toggle function
  function togglePasswordVisibility() {
    if (password_login.type === "password") {
      password_login.type = "text";
      eye_main.src = eyeOn;
    } else {
      password_login.type = "password";
      eye_main.src = eyeOff;
    }
  }

  // Validate username function
  function validateUsername() {
    const value = username_login.value.trim();
    if (value === "") {
      error_username.textContent = "Username can't be empty";
    } else if (value.length < 4) {
      error_username.textContent =
        "Username must be at least 4 characters long";
    } else {
      error_username.textContent = "";
    }
  }

  // Validate password function
  function validatePassword() {
    const value = password_login.value.trim();
    if (value === "") {
      error_password.textContent = "Password can't be empty";
    } else if (value.length < 6) {
      error_password.textContent =
        "Password must be at least 6 characters long";
    } else {
      error_password.textContent = "";
    }
  }
}

Login();
