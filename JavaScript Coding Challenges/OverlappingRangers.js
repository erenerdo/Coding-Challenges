/*

Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr 
which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also 
representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, 
and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] 
then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range 
of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 
4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false. 

*/
function OverlappingRanges(arr) { 

  let range1_min = arr[0];
  let range1_max = arr[1];
  
  let range2_min = arr[2];
  let range2_max = arr[3];
  
  let x = arr[4];
  let count = 0;
         
    for (let i = range1_min; i <= range1_max; i++){
        if(i >= range2_min && i <= range2_max){
            count++;
        }
    }
    
    return count >= x;
    
    
}