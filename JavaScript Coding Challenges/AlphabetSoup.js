/*

Have the function AlphabetSoup(str) take the str string parameter being passed and 
return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 

*/

function AlphabetSoup(str) { 

    charArray = str.split("");
    
    charArray = charArray.sort();
    
    str = charArray.join("");

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
AlphabetSoup(readline());