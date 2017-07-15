/*

You are given a string with the symbols ( and ) and you need to write a function that will determine if
the parenthsis are correctly nested in the string which means every opening ( has a closing )

*/

var correct = "()()(())(()())";
var wrong = "(((()))";

function isValid(str){
  
  var stack = [];
  
  for (var i = 0; i < str.length; i++){
    let ele = str[i];
    
    if(ele === "("){
      stack.push(ele);
    }
    else if(ele === ")"){
      stack.pop();
    }
  }
  
  return stack.length === 0;
  
}

console.log("Correct returns " + isValid(correct));
console.log("Wrong returns " + isValid(wrong));