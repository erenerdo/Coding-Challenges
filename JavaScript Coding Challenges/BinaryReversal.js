/*

Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, 
take its binary representation, reverse that string of bits, and then finally return the new reversed string 
in decimal form. For example: if str is "47" then the binary version of this integer is 00101111. 
Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal 
version of this string, which is 244

*/

function BinaryReversal(str) { 
    

  let binStr = Number(str).toString(2);

   while(binStr.length % 8 !== 0) { // add 0 at the beginning to make blocks of 8 bits
    binStr = "0" + binStr;    
  }

 num = 0;
 let pow = 1;
 
 for (let i = 0; i < binStr.length; i++){
    let char = binStr[i];    
 
     if (char === "1"){
         num += pow;
     }
     pow *= 2;
 }
 
 return num;
  
}
   
// keep this function call here 
BinaryReversal(readline());