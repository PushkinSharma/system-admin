document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const showPasswordIcon = document.getElementById('showPassword');
    const hidePasswordIcon = document.getElementById('hidePassword');
  
    hidePasswordIcon.addEventListener('click', function() {
      passwordInput.type = 'text';
      showPasswordIcon.style.display = 'block';
      hidePasswordIcon.style.display = 'none';
    });
  
    showPasswordIcon.addEventListener('click', function() {
      passwordInput.type = 'password';
      hidePasswordIcon.style.display = 'block';
      showPasswordIcon.style.display = 'none';
    });


  });

  
  function validateLoginForm(){
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const inputWithIcon = document.querySelectorAll('.input-with-icon');
  
    if (!emailPattern.test(email)) {
      emailError.style.display = "block";
      inputWithIcon[0].style.marginBottom = "0";
    } else {
      emailError.style.display = "none";
      inputWithIcon[0].style.marginBottom = "1rem";
    }

    if(passwordInput.value.trim() === ""){
      passwordError.style.display = "block";
      inputWithIcon[1].style.marginBottom = "0";
    }else{
      passwordError.style.display = "none";
    }
  }

