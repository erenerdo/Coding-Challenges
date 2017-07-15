/*

Have the function DivisionStringified(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas. 
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 

*/

function DivisionStringified(num1,num2) { 

    let val = Math.round(num1/num2);
    console.log(val);
    let str = "";
    
    while(val > 0){
      
      if (val < 1000){
        str = val + str;
        break;
      }
        
       str = "," + val% 1000 + str;
       
       val = Math.floor(val/1000);
    }
    
    if (str === "")
        return 0;
    
    return str;
}