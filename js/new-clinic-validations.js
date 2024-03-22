

function validateForm(event) {
  event.preventDefault();

  const form = event.target;
  const formFields = form.querySelectorAll("input, select");
  const errorDivs = form.querySelectorAll(".global-error");
  let isValid = true;

  // Reset all error messages
  const errorMessages = form.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.style.display = "none";
  });

  // Reset all error messages
  errorDivs.forEach((errorDiv) => {
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  });

  // Loop through each form field
  formFields.forEach((field, index) => {
    const errorDiv = errorDivs[index];

    if (
      (field.tagName === "INPUT" && field.value.trim() === "") ||
      (field.tagName === "SELECT" && field.selectedIndex === 0)
    ) {
      isValid = false;
      errorDiv.textContent = "This field is required.";
      errorDiv.style.display = "block";
    }
  });

  if (isValid) {
    // If all fields are valid, submit the form
    form.submit();
  }
}

const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

const phoneInput = document.getElementById("phoneInput");
const phoneError = document.getElementById("phoneError");

phoneInput.addEventListener("input", function () {
  const phone = phoneInput.value.trim();
  const phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phone)) {
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});
