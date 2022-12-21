// Assignment Code
var generateBtn = document.querySelector("#generate");
// call variables for arrays for letters, numbers, and special characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '>', '?', '@', '[', ']', '^'];

// Generates random number
function generateRandNum() {
  var rand = Math.floor(Math.random() * ((numbers.length - 1) - 0) + 0);
  return numbers[rand];
}

// Generates random letter
function generateRandChar() {
  var rand = Math.floor(Math.random() * ((letters.length - 1) - 0) + 0);
  return letters[rand];
}

// Generates random spcial character
function generateRandSpecialChar() {
  var rand = Math.floor(Math.random() * ((specialChars.length - 1) - 0) + 0);
  return specialChars[rand];
}

// make prompt box asking the user for passwork length and confirmation boxes asking the user if uppercase, lowercase, numeric, and spcial chars
function askUser() {
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  if (passwordLength < 8) {
    window.alert("password has to be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    window.alert("password cannot exceed 128 characters");
    return;
  }

  var uppercase = window.confirm("Would you like uppercase letters in your password");
  var lowercase = window.confirm("Would you like lowercase letters in your password");
  var numbers = window.confirm("Would you like numbers in your password");
  var spcialChars = window.confirm("Would you like special characters in your password");

  if (!uppercase && !lowercase && !numbers && !spcialChars) {
    window.alert("You need to choose yes to at least one of the conditions");
    return;
  }

  return [uppercase, lowercase, numbers, spcialChars, passwordLength];
}

// write a generatePassword function
function generatePassword(upper, lower, num, char, length) {
  var password = "";
  if (upper && lower && num && char) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (4 - 0) + 0);
      console.log(rand);
      if (rand === 0) {
        password += generateRandChar().toUpperCase();
      }
      else if (rand === 1) {
        password += generateRandChar().toLowerCase();
      }
      else if (rand === 2) {
        password += generateRandNum();
      }
      else {
        password += generateRandSpecialChar();
      }
    }
    return password;
  }
  else if (upper && lower && num) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (3 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else if (rand == 1) {
        password += generateRandChar().toLowerCase();
      }
      else {
        password += generateRandNum();
      }
    }
    return password;
  }
  else if (upper && lower && char) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (3 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else if (rand == 1) {
        password += generateRandChar().toLowerCase();
      }
      else {
        password += generateRandSpecialChar();
      }
    }
    return password;
  }
  else if (upper && char && num) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (3 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else if (rand == 1) {
        password += generateRandChar();
      }
      else {
        password += generateRandNum();
      }
    }
    return password;
  }
  else if (lower && char && num) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (3 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toLowerCase();
      }
      else if (rand == 1) {
        password += generateRandSpecialChar();
      }
      else {
        password += generateRandNum();
      }
    }
    return password;
  }
  else if (upper && lower) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else {
        password += generateRandChar().toLowerCase();
      }
    }
    return password;
  }
  else if (upper && num) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else {
        password += generateRandNum();
      }
    }
    return password;
  }
  else if (upper && char) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toUpperCase();
      }
      else {
        password += generateRandSpecialChar();
      }
    }
    return password;
  }
  else if (lower && num) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toLowerCase();
      }
      else {
        password += generateRandNum();
      }
    }
    return password;
  }
  else if (lower && char) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandChar().toLowerCase();
      }
      else {
        password += generateRandSpecialChar();
      }
    }
    return password;
  }
  else if (num && char) {
    for (var i = 0; i < length; i++) {
      var rand = Math.floor(Math.random() * (2 - 0) + 0);
      if (rand == 0) {
        password += generateRandNum();
      }
      else {
        password += generateRandSpecialChar();
      }
    }
    return password;
  }
  else if (upper) {
    for (var i = 0; i < length; i++) {
      password += generateRandChar().toUpperCase();
    }
    return password;
  }
  else if (lower) {
    for (var i = 0; i < length; i++) {
      password += generateRandChar().toLowerCase();
    }
    return password;
  }
  else if (num) {
    for (var i = 0; i < length; i++) {
      password += generateRandNum();
    }
    return password;
  }
  else if (char) {
    for (var i = 0; i < length; i++) {
      password += generateRandChar();
    }
    return password;
  }
}


// Write password to the #password input
function writePassword() {
  var criteria = askUser();
  var password = generatePassword(criteria[0], criteria[1], criteria[2], criteria[3], criteria[4]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

