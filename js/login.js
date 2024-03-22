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
  