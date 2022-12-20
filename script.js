// Assignment Code
var generateBtn = document.querySelector("#generate");
// call variables for arrays for letters, numbers, and special characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var spcialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '>', '?', '@', '[', ']', '^'];

// make prompt box asking the user for passwork length and confirmation boxes asking the user if uppercase, lowercase, numeric, and spcial chars
function askUser() {
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  if (passwordLength < 8) {
    window.alert("password has to be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    window.alert("password129 cannot exceed 128 characters");
    return;
  }

  var uppercase = window.confirm("Would you like lowercase letters in your password");
  var lowercase = window.confirm("Would you like uppercase letters in your password");
  var numbers = window.confirm("Would you like numbers in your password");
  var spcialChars = window.confirm("Would you like special characters in your password");

  if (!uppercase && !lowercase && !numbers && !spcialChars) {
    window.alert("You need to choose yes to at least one of the conditions");
    return;
  }
  return uppercase, lowercase, numbers, spcialChars, passwordLength;
}

// write a generatePasswork function
function generatePassword(upper, lower, num, char, length) {
  var password;
  if (upper && lower && num && char) {
    for (var i = 0; i < length; i++) {
      
    }
  }
  else if (upper && lower && num) {

  }
  else if (upper && lower && char) {

  }
  else if (upper && char && num) {

  }
  else if (lower && char && num) {

  }
  else if (upper && lower) {

  }
  else if (upper && num) {

  }
  else if (upper && char) {

  }
  else if (lower && num) {

  }
  else if (lower && char) {

  }
  else if (num && char) {

  }
  else if (upper) {

  }
  else if (lower) {

  }
  else if (num) {

  }
  else if (char) {

  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(askUser());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

