/*

Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the 
products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then 
the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. 
The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. 
You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. 
The array will contain at most 10 elements and at least 1 element of only positive integers. 

*/

function OtherProducts(arr) { 

    var mult = [];
    
    // Make mult an array of 1s
    for (var i = 0; i < arr.length; i++){
        mult.push(1);
    }
    
    var val = 1;
    
    for (let i = 0; i < arr.length-1; i++){
        
        mult[i+1] *= arr[i]*val;
        val *= arr[i];
    }
    
    console.log(mult);
    val = 1;
  
    for (let j = arr.length-1; j > 0; j--){

        mult[j-1] *= (arr[j]*val);
        val *= arr[j];
     
    }
    
    let str = mult.join("-");
    return str;


}