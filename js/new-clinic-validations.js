const fieldIDs = [
  "emailInput",
  "phoneInput",
  "clinicName",
  "address",
  "city",
  "state",
  "country",
  "category",
  "productPlan",
  "planStart",
  "planEnd",
  "paymentStatus",
  "paymentFrequency",
  "lastPayment",
  "nextPayment",
];

function validateForm(event) {
    event.preventDefault();
  
    const form = event.target;
    const formFields = form.querySelectorAll('input, select');
    const errorDivs = form.querySelectorAll('.global-error');
    let isValid = true;
  
    // Reset all error messages
    const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => {
        errorMessage.style.display = 'none';
    });

    // Reset all error messages
    errorDivs.forEach(errorDiv => {
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';
    });
  
    // Loop through each form field
    formFields.forEach((field, index) => {
      const errorDiv = errorDivs[index];
  
      
      if (
        (field.tagName === 'INPUT' && field.value.trim() === '') ||
        (field.tagName === 'SELECT' && field.selectedIndex === 0)
      ) {
        isValid = false;
        errorDiv.textContent = 'This field is required.';
        errorDiv.style.display = 'block';
      }
    });

    if (isValid) {
      // If all fields are valid, submit the form
      form.submit();
    }
  }