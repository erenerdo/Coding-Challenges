/*

Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, 
both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], 
then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in
 corresponding locations from both arrays. For the example input, your program should do the following additions: 
 [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting 
 array in a string format with each element separated by a hyphen: 6-4-13-17. 

If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array 
(example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array. 


*/

function ArrayMatching(strArr) {    
    
    let str1 = strArr[0].substring(1, strArr[0].length-1);
    let str2 = strArr[1].substring(1, strArr[1].length-1);
    
    console.log(str1);
    console.log(str2);
    
    let arr1 = str1.split(", ");
    let arr2 = str2.split(", ");
    console.log(arr1);
    console.log(arr2);
    
    let min = Math.min(arr1.length, arr2.length);
    console.log(min);
    
    let ret = [];
    
    for (let i = 0; i < min; i++){
        ret[i] = Number(arr1[i]) + Number(arr2[i]);
    }
    console.log(ret);
    
    if(arr2.length > min){
        for(let i = min; i < arr2.length; i++){
            ret[i] = Number(arr2[i]);
        }
    }
    else if(arr1.length > min){
        for(let i = min; i < arr1.length;i++){
            ret[i] = Number(arr1[i]);
        }
    }
    
    return ret.join("-");
  
         
}