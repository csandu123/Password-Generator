// Assignment code here
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","&"];
var passLength = 8;
var chars = [];


function generatePrompts() {
  passLength = parseInt(prompt("How many characters would you like there to be in your password? Max: 128  Min: 8"));
  if(isNaN(passLength) || passLength < 8 || passLength > 128) {
    return false;
  }
  if (confirm("Would you like password to contain lowercase characters?")) {
    chars = chars.concat(lower);
  }
  if (confirm("Would you like password to contain uppercase characters?")) {
    chars = chars.concat(upper);
  }
  if (confirm("Would you like password to contain numbers?")) {
    chars = chars.concat(numbers);
  }
  if (confirm("Would you like password to contain special characters?")) {
    chars = chars.concat(symbols);
  }
  return true;
}


function generatePassword() {
  var pass = "";
  for(var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * chars.length);
    pass = pass + chars[random];
  }
  return pass;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passPrompts = generatePrompts();
  if (passPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
