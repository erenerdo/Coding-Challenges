/*

Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return 
the second lowest and second greatest numbers, respectively, separated by a space. 
For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
The array will not be empty and will contain at least 2 numbers. 
It can get tricky if there's just two numbers! 

*/

function SecondGreatLow(arr) { 
    
    if(arr.length === 2){
        arr.sort(function(a,b){return a-b;})
        return arr[1] + " " + arr[0];
    }
    
    
    let max = -100000000;
    let sMax = -100000000;
    
    let min =  100000000;
    let sMin =  100000000;
    
    for (let i = 0; i < arr.length; i++){
      
      let val = arr[i];
      
      if(val > max){
        sMax = max;
        max = val;
      }
      else if(val > sMax && val < max){
        sMax = val;
      }
      
      if (val < min){
        sMin = min;
        min = val;
      }
      else if(val < sMin && val > min){
        sMin = val;
      }
      
    }
    
    return sMin + " " + sMax;
}
   
// keep this function call here 
SecondGreatLow(readline());