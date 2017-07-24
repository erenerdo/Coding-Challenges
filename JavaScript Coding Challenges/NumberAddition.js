/*

Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, 
add them together, then return that final number. For example: if str is "88Hello 3World!" the output 
should be 91. You will have to differentiate between single digit numbers and multiple digit numbers 
like in the example above. So "55Hello" and "5Hello 5" should return two different answers. 
Each string will contain at least one letter or symbol. 

*/

function NumberAddition(str) { 

    let total = 0;
    let temp = "";
   
  // Iterate through string
   for (let char of str){
        
        if(isNaN(char) || char === " "){
            // when element isn't a number then add temp to total
            
            if(temp.length > 0){
                total += Number(temp);
            }
            temp = "";
        }
        // Keep track of valid numbers in temp string variable
        else{
            temp += char;
        }
    
   }
   
   // Special case for characters being a number
   if (temp.length > 0){
       total += Number(temp);
   }
  // return total
  return total;
}
   
// keep this function call here 
NumberAddition(readline());