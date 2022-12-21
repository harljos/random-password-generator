// Assignment Code
var generateBtn = document.querySelector("#generate");
// call variables for arrays for letters, numbers, and special characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

// Generates random character using Math.random function to choose an integer choosing 
// from the first index 0 to the last index at the end of the list for number, letters, and special characters
function generateRandNum() {
  var rand = Math.floor(Math.random() * (numbers.length - 0) + 0);
  return numbers[rand];
}


function generateRandChar() {
  var rand = Math.floor(Math.random() * (letters.length - 0) + 0);
  return letters[rand];
}


function generateRandSpecialChar() {
  var rand = Math.floor(Math.random() * (specialChars.length - 0) + 0);
  return specialChars[rand];
}

// asks the user for password criteria and returns the criteria
function askUser() {
  var passwordLength = window.prompt("How many characters would you like your password to be?");

  // checks that the user input is a number and that the number is inbetween 8 and 128
  if (isNaN(passwordLength)) {
    window.alert("input must be a number");
    return;
  }
  else if (passwordLength < 8) {
    window.alert("password has to be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    window.alert("password cannot exceed 128 characters");
    return;
  }

  // asks the user for uppercase letter, lowercase letters, number, and special characters
  var uppercase = window.confirm("Would you like uppercase letters in your password");
  var lowercase = window.confirm("Would you like lowercase letters in your password");
  var numbers = window.confirm("Would you like numbers in your password");
  var spcialChars = window.confirm("Would you like special characters in your password");

  // ensures the user has selecter at least one of the criteria
  if (!uppercase && !lowercase && !numbers && !spcialChars) {
    window.alert("You need to choose yes to at least one of the conditions");
    return;
  }

  return [uppercase, lowercase, numbers, spcialChars, passwordLength];
}

// generates password off given criteria in parameters
function generatePassword(upper, lower, num, char, length) {
  // uses givern criteria in condionals then uses Math.random function to choose a character at random from givern criteria
  // add adds on to the passwork variable and returns it
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
        password += generateRandSpecialChar();
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
      password += generateRandSpecialChar();
    }
    return password;
  }
}


// Writes password to the #password input
function writePassword() {
  var criteria = askUser();
  var password = generatePassword(criteria[0], criteria[1], criteria[2], criteria[3], criteria[4]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when generate password button is clicked it calld the writePassword function
generateBtn.addEventListener("click", writePassword);

