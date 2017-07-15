/*

Have the function Palindrome(str) take the str parameter being passed and return the string true if 
the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. 
For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

*/

function Palindrome(str) { 
    
    // Remove spaces
    str = str.replace(/\s/g, '');
    
    // Pointer to the first element
    let i = 0;
    
    // Pointer to the last element
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