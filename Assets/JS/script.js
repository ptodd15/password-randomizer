//Defined variables
var generateBtn = document.querySelector("#generate");
var enter = ""
var uppercaseChar = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","(",")","*","-","_","=","+","[","{","}","]","\\","|",";",":","'","?","<",">"];

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Generate password function
function generatePassword() {
  
  //Password character length prompt
  var passwordLength = window.prompt ("Choose between 8-128 characters");

  //return back to beginning for selection not within paramaters 
  if (passwordLength < 8 || passwordLength > 128) {
   window.alert("INVALID SELECTION, return to start");
  return generatePassword()
  }

  //uppercase select
  var confirmUppercase = window.confirm("Include uppercase characters?");
  if (confirmUppercase){
    enter = enter + uppercaseChar;
  }
  else if(confirmUppercase) {
    return false 
  }
  
  //lowercase select
  var confirmLowercase = window.confirm("Include lowercase characters?")
  if (confirmLowercase){
    enter = enter + lowercaseChar;
  }
  else if(confirmLowercase) {
    return false 
  }
  
//number select
  var confirmNumber = window.confirm("Include numbers?");
  if (confirmNumber){
    enter = enter + numberChar;
  }
  else if(confirmNumber) {
    return false 
  }

//special characters select
  var confirmSpecial = window.confirm("Include special characters?");
  if (confirmSpecial){
    enter = enter + specialCharacters;
  }
  else if(confirmSpecial) {
    return false 
  }

// Alert and return back to beggining with no selection 
  if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecial){
    window.alert("INVALID SELECTION, return to start");
    return generatePassword() ;
  }



//for loop section and final password construction
password = []
var compress = enter.replace(/,/g, "");
enter = "";
  for (var i = 0; i < passwordLength; i++){
      var randomChar = compress [Math.floor(Math.random() * compress.length)]
      password.push(randomChar);
};
return password.join("");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);