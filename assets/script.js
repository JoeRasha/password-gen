// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Function to generate password based in user inputs
function generatePassword() {

  // prompt user for password length
  let userLength = prompt("Enter a password length between 8 and 128.");
 
  // If not a number between 8 and 128, alert user
  // Works to return the user to the main page, so they have to click Generate Password again.
  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("Please enter a valid selection for password length. Click Generate Password to try again.");
    pwString = "";
    return;
  };

//The prompt user for password characters
let userLowerCase = confirm("Would you like LOWER CASE letters in your password? Click OK for YES and Cancel for NO.");
let userUpperCase = confirm("Would you like UPPER CASE letters in your password? Click OK for YES and Cancel for NO.");
let userNumbers = confirm("Would you like NUMBERS in your password? Click OK for YES and Cancel for NO.");
let userSymbols = confirm("Would you like SYMBOLS in your password? Click OK for YES and Cancel for NO.");

// The Strings for password
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!*$%&#@+?:;()^";
let pwString = "";