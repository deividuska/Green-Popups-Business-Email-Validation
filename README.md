Green Popups Business Email Validation
This repository contains custom JavaScript code for Green Popups to validate and allow only business email addresses in a popup form. The code restricts submission of personal email addresses from providers like Gmail, Hotmail, Yahoo, AOL, and Outlook.

Setup Instructions
1. Make sure the 'Activate Custom JavaScript Handlers' module is enabled in Green Popups. Go to the 'Advanced Settings' page and turn it on.
2. In your Green Popups form editor, click the button on the Top Toolbar, select the 'Advanced' tab, and click 'Custom JavaScript Handlers'.
3. Add the following JavaScript code in the 'Custom JavaScript Handlers' section under the 'AfterInit' handler:
```js
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
```
4. Save your changes.
Please note that the code assumes the existence of only one email input field and one submit button with the specified selectors. If you have multiple email input fields or submit buttons with the same classes, you may need to adjust the querySelector accordingly to target the correct elements.

How it Works
The provided custom JavaScript code validates the email input field when the user clicks the submit button in the Green Popups form. If the entered email address is not a valid business email, the form submission will be prevented, and an error message "Please enter a valid business email address" will be shown. If the entered email address is valid, the form will submit and close the popup as usual.

Support
For any issues or questions related to this repository, please open a new issue on GitHub. If you need assistance with Green Popups or their features, please reach out to Green Popups support or their community forums.
