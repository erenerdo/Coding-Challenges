/*

Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a 
superincreasing sequence where each element in the array is greater than the sum of all previous elements. 
The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program 
should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, 
then your program should return the string "false" 

*/

function Superincreasing(arr) { 

    let total = 0;
    
    for (var ele of arr){
        if (ele > total){
            total += ele;
        }
        else{
            return false;
        }
    }
    return true;
}
 