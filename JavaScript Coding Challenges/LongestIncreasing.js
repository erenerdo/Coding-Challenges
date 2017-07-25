/*

Using the JavaScript language, have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS 
is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence. 
Sample Test Cases
Input:9, 9, 2, 4
Output:1

Input:10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90
Output:7

*/


function LongestIncreasingSequence(arr) { 

    let currentMax = 0;
    let currentCount = 0;
    let nums = [];
    
    for (let i = 0; i < arr.length; i++){
        
        for (let j = i; j < arr.length; j++){
            let num = arr[j];
            
            if(num > currentMax){
                currentMax = num;
                currentCount++;
            }
            
        }
        
        nums.push(currentCount);
        currentCount = 0;
        currentMax = 0;
    }
    
    console.log(nums);
    
    let max = nums[0];
    
    for (let ele of nums){
        if (ele > max){
            max = ele;
        }
    }
    
    return max;
         
}

var arr = [10, 12, 4, 6, 100, 2, 56, 34, 79];
LongestIncreasingSequence(arr);



