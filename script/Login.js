function Login() {
  const eyeOff =
    "../img/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
  const eyeOn = "../img/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

  const eyemain = document.getElementById("eye");

  eyemain.addEventListener("click", togglePasswordVisibility);

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
}

export default Login;
