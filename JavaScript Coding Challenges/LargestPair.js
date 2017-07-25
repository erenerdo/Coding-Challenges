/*

Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 
Sample Test Cases
Input:453857
Output:85

Input:363223311
Output:63

*/

function LargestPair(num) { 

    let str = num.toString();
    console.log(str);
  
    let max = 0;
  
        for (let i = 0; i < str.length-1; i++){
      let n = Number(str.substring(i, i+2));
      if (n > max)
        max = n;
    }
         
    return max;
}

LargestPair(363223311);
