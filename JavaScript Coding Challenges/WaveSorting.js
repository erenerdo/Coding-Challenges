/*

Have the function WaveSorting(arr) take the array of positive integers stored in arr and return the 
string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., 
otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave 
ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. 
The input array will always contain at least 2 elements. More examples are given below as sample test cases. 

*/

function WaveSorting(arr) { 

    arr.sort(function(a,b){return a-b});
    console.log(arr);
    
    var wave = Array(arr.length);
    let j = 0;
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        wave[j] = arr[i];
        j += 2;
    }

    
    j = 1;    
    for (let i = Math.floor(arr.length/2); i < arr.length; i++){
        wave[j] = arr[i];
        j += 2;
    }

    console.log(wave);
    
    for(let i = 1; i < wave.length-1; i += 2){
        
        if(wave[i] > wave[i-1] && wave[i] > wave[i+1]){
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}
var arr = [0, 4, 22, 4, 14, 4, 2];
WaveSorting(arr);