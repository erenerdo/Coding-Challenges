/*

You are given an array of characters and a string S.
Write a function to return the string S with all the
characters from the array removed.

*/

function removeChar(charArr, str){
  
  var newStr = "";
  
  // put all elements in charArr in HashTable that will be used like a HashSet
  
  var hashTable = {};
  
  charArr.forEach(function(element){
    
    if(hashTable[element] === undefined){
      // add to hashTable
      hashTable[element] = element;
    }
  })
  
  for (let i = 0; i < str.length; i++){
    
    var char = str[i];
    
    if(hashTable[char] === undefined){
      // element not in charArr
      newStr += char;
    }
    
  }
  
  return newStr;
  
}

var charArr = ['h', 'e', 'w', 'o'];
var str = "hello world";

removeChar(charArr, str);

