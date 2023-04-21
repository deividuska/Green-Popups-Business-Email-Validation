function validateBusinessEmail(event) {
  var emailField = document.querySelector('input[type="email"]'); // Adjust the query selector if needed
  var emailValue = emailField.value;
  var businessEmailRegex = /^(?!.*@(gmail\.com|hotmail\.com|yahoo\.com|aol\.com|outlook\.com))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!businessEmailRegex.test(emailValue)) {
    event.preventDefault(); // Prevent the form submission
    emailField.setCustomValidity('Please enter a valid business email address.');
    emailField.reportValidity();
    setTimeout(function() {
      emailField.setCustomValidity('');
    }, 5000);
    return false;
  } else {
    emailField.setCustomValidity('');
    return true;
  }
}

var submitButton = document.querySelector('.lepopup-button-zoom-out.spu-form'); // Adjust the query selector if needed
submitButton.onclick = function(event) {
  if (validateBusinessEmail(event)) {
    return lepopup_submit(this);
  } else {
    return false;
  }
};
