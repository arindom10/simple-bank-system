// Step-1: Add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
   // step-2get the email address inside the email input field
   // always remember to use .value to get text form an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;

   // verify email & password
   if (email === 'karindom7@gmail.com' && password === 'secret') {
      window.location.href = 'bank.html'
   }
   else{
      alert('Invalid User');
   }
})

