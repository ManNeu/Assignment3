//DOM
var passwordEl = document.getElementById ('password');
var generateEl = document.getElementById ('generate');



//checking the length of password must be within range

function checkLength(){
    var length =  prompt ("enter desirable length of your password");
    var length = parseInt(length);
if (length <8 || length > 128){
    alert("password must be between 8 and 128 characters long");
    return '';
}
else if(length>=8 && length <=128){
    var hasLower = confirm ("want lower");
    var hasUpper = confirm ("want upper");
    var hasNumber = confirm ("want number");
    var hasSymbol = confirm ("want Symbol");
    console.log (typeof(hasSymbol));
    console.log (hasNumber);
}
else if(hasLower==false && hasUpper == false && hasNumber == false && hasSymbol == false){
    alert("task cannot be completed");
    return '';
}

generateEl.addEventListener ('click', () =>{
var generatedPassword = '';



if (hasLower == true)
{
    var lower = getRandomLower();
    console.log (lower);
   
generatedPassword += lower;
}

if (hasUpper == true){
    var upper = getRandomUpper();
    generatedPassword += upper;

   
}

if (hasNumber == true){
    var Number = getRandomNumber();
    generatedPassword += Number;
    
}

if (hasSymbol == true){
    var Symbol =  getRandomSymbol();
    generatedPassword += Symbol;
   
}

var generatePassword;

passwordEl.innerText =  generatePassword (generatedPassword);

console.log(generatePassword);

});
}
checkLength ();




//generate functions
function getRandomLower(){
    var lowerCasedCharacters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ];
      return lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
      

}
 //console.log (getRandomLower());

 function getRandomUpper(){
    var upperCasedCharacters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ];
    return upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
    
   

    }
    //console.log(getRandomUpper());
    
    function getRandomNumber(){
        var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return numericCharacters[Math.floor(Math.random()*numericCharacters.length)];

        //return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    
        }
       //console.log (getRandomNumber());
       function getRandomSymbol(){
           
          const symbols = [
            '@',
            '%',
            '+',
            '\\',
            '/',
            "'",
            '!',
            '#',
            '$',
            '^',
            '?',
            ':',
            ',',
            ')',
            '(',
            '}',
            '{',
            ']',
            '[',
            '~',
            '-',
            '_',
            '.'
          ];
        return symbols[Math.floor(Math.random()*symbols.length)];
        }
        //console.log(getRandomSymbol());