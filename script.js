document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const emailSuccess = document.getElementById("emailSuccess");
  const passwordError = document.getElementById("passwordError");
  const passwordSuccess = document.getElementById("passwordSuccess");
  const form = document.getElementById("signupForm");

  emailInput.addEventListener("input", function() {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
      emailError.textContent = "";
      emailSuccess.textContent = "Email looks good!";
    } else {
      emailError.textContent = "Email must be more than 3 characters and contain '@' and '.'";
      emailSuccess.textContent = "";
    }
  });

  passwordInput.addEventListener("input", function() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
      passwordError.textContent = "";
      passwordSuccess.textContent = "Password looks good!";
    } else {
      passwordError.textContent = "Password must be more than 8 characters";
      passwordSuccess.textContent = "";
    }
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailSuccess.textContent && passwordSuccess.textContent) {
      const isConfirmed = confirm("Are you sure you want to submit the form?");
      if (isConfirmed) {
        alert("Successful signup!");
      } else {
        emailInput.value = "";
        passwordInput.value = "";
      }
    } else {
      alert("Please correct the errors before submitting.");
    }
  });
});
