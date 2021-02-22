// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function getLowerCase (){
  var indexDecimal = Math.random()* lowercaseLetters.length 
var index = Math.floor(indexDecimal)
var lowerCase = lowercaseLetters[index]
return lowerCase;
}

function getUpperCase (){
  var indexDecimal = Math.random()* uppercaseLetters.length 
var index = Math.floor(indexDecimal)
var UpperCase = uppercaseLetters[index]
return UpperCase;
}

function getSpecials (){
  var indexDecimal = Math.random()* specials.length 
var index = Math.floor(indexDecimal)
var spcl = specials[index]
return spcl;
}

function getNumbers (){
  var indexDecimal = Math.random()* numbers.length 
var index = Math.floor(indexDecimal)
var nmbrs = numbers[index]
return nmbrs;
}

// Write password to the #password input
function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be? (8-128)")
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a number between 8 and 128.")
    console.log(passwordLength)
  }
  var useLowerCase = confirm ("Do you want to use lowercase letters?")

  var useUpperCase= confirm ("Do you want to use uppercase letters?")

  var useNumbers = confirm ("Do you want to include numbers in your password?")

  var useSpecials = confirm ("Do you want to include special characters in your password?")


var string = ""


  for (let i = 0; i < passwordLength;) {
var random = Math.random()

    if (random >.75 && useUpperCase) {
      string += getUpperCase()
    i++
    }
   else if (random >.5 && useLowerCase) {
      string += getLowerCase()
    i++
    }
   else if (random > .25 && useNumbers) {
      string += getNumbers()
    i++
    }
    else if (random > 0 && useSpecials) {
      string += getSpecials()
    i++
    }
  }

  return string;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // Add event listener to generate button

}

generateBtn.addEventListener("click", writePassword)
