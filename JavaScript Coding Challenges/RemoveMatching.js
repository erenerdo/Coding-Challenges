/*
This challenge asks you to remove all matching adjacent pairs of letters from a string and 
return the modified string. For example, if the string is “aaagykkok” then your program 
would return “agyok” because “aa” and “kk” had been removed.

*/

function removeMatching(str){
  
  let newStr = "";
  
  for (let i = 0; i < str.length; i++){
    
    if(i === str.length-1){
      newStr += str[i];
    }
    else if(str[i] === str[i+1]){
      i++;
    }
    else{
      newStr += str[i];
    }
  }
  
  return newStr;
  
}

console.log(removeMatching("aaagykkok")) // agyok
console.log(removeMatching("baannoooniiilo")); // bonilo