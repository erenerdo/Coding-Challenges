/*

Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. 
The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the 
next largest number that is a palindrome. 

*/

function NextPalindrome(num) { 

    num++;
  while (!checkPalindrome(num.toString())){
      num++;
  }
  
  return num;
}

function checkPalindrome(str){
    
    let i = 0;
    let j = str.length-1;
    
    while (i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    
    return true;
    
}
   
// keep this function call here 
NextPalindrome(readline());