function writePassword() {

  //set up the min and max length  
  var minPassLength = 8;
  var passLength = 128;
  var promptLength = prompt("How long do you want your password? Enter between 8-128 characters.");


  //validation of length 
  if (promptLength > passLength) {
    alert("Must be less then 128 Charaters!")
  }
  if (promptLength < minPassLength) {
    alert("Must be greater than 8 Charaters!")
  }
  else {

  //set up speacial characters
  var confirmChar = confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters in your password?");
  if (confirmChar == true) {
    var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!/#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    generatePassword();
  } else {
    var charList = "abcdefghijklmnopqrstuvwxyz";
    generatePassword();
  }
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
