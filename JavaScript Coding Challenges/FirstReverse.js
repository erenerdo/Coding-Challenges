/*
Challenge
Using the JavaScript language, have the function FirstReverse(str) take 
the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then your 
program should return the string sredoC dna dlroW olleH.
 
Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"
*/

function FirstReverse(str) { 
    
    var newStr = "";
    
    for (var i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }

  // code goes here  
  return newStr; 
         
}
   
// keep this function call here 
FirstReverse(readline());