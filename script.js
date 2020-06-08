// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function writePassword() {

  //set up the min and max length  
  var minPassLength = 8;
  var passLength = 128;
  var promptLength = prompt("How long do you want yur password? Choose between 8-128 characters.");


  //validation of length 
  if (promptLength > passLength) {
    alert("Must be less then 128 Charaters!")
  }
  if (promptLength < minPassLength) {
    alert("Must be greater than 8 Charaters!")
  }

  //set up speacial characters
  var confirmChar = confirm("Would you like include lowercase, uppercase, numeric, and/or special characters in your password?");
  if (confirmChar == true) {
    var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!/#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    generatePassword();
  } else {
    var charList = "abcdefghijklmnopqrstuvwxyz";
    generatePassword();
  }
  
  //generate the password
  function generatePassword() {
    var passwordText = document.querySelector("#password");
    retVal = "";
    for (var i = 0, n = charList.length; i < promptLength; ++i) {
        retVal += charList.charAt(Math.floor(Math.random() * n));
    }
    passwordText.value = retVal;
    return retVal;
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);
