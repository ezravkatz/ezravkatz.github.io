// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //PW Prompts 

  var success = false;

  while (success == false) {
    passwordLength = Number(prompt("How many characters long would you like your password to be?"));

    if (passwordLength < 8) {
      alert("Password must be greater than eight characters in length.");
    } else if (passwordLength > 128) {
      alert("Password must be less than 128 characters in length.");
    } else {
      success = true;
    }
  }

  console.log("Password length" + passwordLength);

  success = false;

  while (success == false) {
    confirmUpper = confirm ("Click to confirm inclusion of uppercase characters.")
      alert("Upper case" + confirmUpper);
    confirmLower = confirm ("Click to confirm inclusion of lowercase characters.")
      alert("lower case" + confirmLower);
    confirmNumbers = confirm ("Click to confirm inclusion of numbers.")
      alert("Numbers" + confirmNumbers);
    confirmSpecial = confirm ("Click to confirm inclusion of special characters.")
      alert("Special Characters" + confirmSpecial);

    success = confirmUpper || confirmLower || confirmNumbers || confirmSpecial;

    if (!success) {
      alert("Please select at least one type of character to be included in your password.");
    }
  }

  var index = 0;
  var password = "";
  while (index < passwordLength) {
    var charType = randomValue(0, 4);
    if (confirmUpper && charType == 0) {
      index++;
      password += randomCharacter("A", "Z");
    } else if (confirmLower && charType == 1) {
      index++;
      password += randomCharacter("a", "z");
    } else if (confirmNumbers && charType == 2) {
      index++;
      password += randomCharacter("0", "9");
    } else if (confirmSpecial && charType == 3) {
      index++;
      password += randomCharInString(" \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    }
  }

  return password;
}

function randomCharacter(minimum, maximum) {
  return String.fromCharCode(
    randomValue(maximum.charCodeAt(0), minimum.charCodeAt(0)));
}

function randomValue(minimum, maximum) {
  return Math.floor(Math.random() * (maximum-minimum)) + minimum;
}

function randomCharInString(charSet) {
  return charSet.charAt(randomValue(0, charSet.length));
}