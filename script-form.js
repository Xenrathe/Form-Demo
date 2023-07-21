// Function to check Whether both passwords
// is same or not.
function password_check() {
  password1 = document.getElementById("password");
  password2 = document.getElementById("confirm-password");

  error_msg = document.getElementById('password-mismatch-msg');
  if (password1.value != '' || password2.value != ''){
    if (password1.value != password2.value){
      error_msg.style.color = 'red';
      error_msg.innerHTML = '* Passwords do not match';
      password1.setCustomValidity("Invalid field.");
      password2.setCustomValidity("Invalid field.");
    }
    else{
      error_msg.style.color = 'green';
      error_msg.innerHTML = 'Passwords match'
      password1.setCustomValidity("");
      password2.setCustomValidity("");
    }
  }
  else{
    error_msg.style.color = 'red';
    error_msg.innerHTML = '* Password required';
    password1.setCustomValidity("Invalid field.");
    password2.setCustomValidity("Invalid field.");
  }
}