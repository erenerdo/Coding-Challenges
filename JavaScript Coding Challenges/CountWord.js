/*

Count words that have at least 3 continuous vowels

Example:

"This is an example" ---> 0

"saeeeaasf pooop been is dog leeen" ---> 3

*/

function countWord(sentence){
  
  var strArray = sentence.split(" ");
  var count = 0;
  
  
  for (let str of strArray){
    
    if(str.length < 3)
      continue;
    
    for (let i = 0; i < str.length-2; i++){
      
      if( consecVowels(str[i], str[i+1], str[i+2]) ){
        count++;
        break;
      }
    }
  }
  
  return count;
  
}

function consecVowels(char1, char2, char3){
  
  vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  
  if (vowels[char1] && vowels[char2] && vowels[char3]){
    return true;
  }
  return false;
  
}

console.log(countWord("This is an example"));
console.log(countWord("saeeeaasf pooop been is dog leeen"));

