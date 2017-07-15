/*

Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

*/
function DashInsert(str) { 
    
    let returnStr = "";
    
    for (let i = 0; i < str.length; i++){
 
        if(i === str.length-1){
            returnStr += str[i];
        }
        else if(isOdd(str[i]) && isOdd(str[i+1])){
            returnStr += str[i] + "-";
        }
        else{
            returnStr += str[i];
        }
    }
  
  return returnStr; 
         
}

// Helper Function
function isOdd(numStr){
    
    let num = Number(numStr);
    return (num%2) === 1;
}

   
// keep this function call here 
DashInsert(readline());