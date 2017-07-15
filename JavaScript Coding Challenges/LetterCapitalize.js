/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize 
the first letter of each word. Words will be separated by only one space. 

*/

function LetterCapitalize(str) { 
    
    // Replace the first letter
    str = replaceAt(str, 0, str[0].toUpperCase())

    for(var i = 1; i < str.length; i++){
        if (str[i] == " "){
            str = replaceAt(str, i+1, str[i+1].toUpperCase());
        }
    }
    
  // code goes here  
  return str; 
         
}
function replaceAt(str, index, newValue){
    var newStr = str.substr(0, index) + newValue + str.substr(index +1, str.length);
    return newStr;
}