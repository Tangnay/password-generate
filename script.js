// Assignment Code
var generateBtn = document.querySelector("#generate");

var getOption = function () {
  var passwordLength = window.prompt ("How many password you want?"); 
  var isValid = parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128;

  while (!isValid){
    passwordLength = window.prompt ('Please choose a number between 8 to 128')
    isValid = parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128;
    console.log (isValid); 
    console.log (passwordLength)

  }

  var isUppercase = window.confirm ("Do you want uppercase?"); 
  var isLowercase = window.confirm ("Do you want lowercase?"); 
  var isNumnber = window.confirm ('Do you want number?');
  var isSpecalCharacter = window.confirm('Do you want speical character?');

    return {
    length: parseInt(passwordLength), 
    uppercase: isUppercase,
    lowercase : isLowercase,
    number : isNumnber,
    specialCharacter : isSpecalCharacter,
  }

}

// Write password to the #password input
function writePassword() {
  var option = getOption ();
  console.log(option);
  var password = generatePassword(option);


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword (option) {
  var passwordPool = ''; 
  if (option.lowercase) {
    passwordPool += 'abcdefbhigklmnopqurstuvwxyz'; 
  }
  if (option.uppercase) {
    passwordPool += 'ABCDEFBHIGKLMNOPQURSTUVWXYZ';
  }
  if (option.number) {
    passwordPool += '0123456789'; 
  }
  if (option.specialCharacter) {
    passwordPool += '!@#$%^&*_+'; 
  }
  console.log (passwordPool);
  var password = ''; 
  for (var i = 0; i < option.length; i ++ ){
    var index = getRandomInt (passwordPool.length); 
    password += passwordPool.charAt(index)
  }

  return password; 
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
