/*
This is more of a simpler question that doesn’t require too much complex code to solve. It simply
requires you to do 3 things, calculcate the mean which is the average of all the numbers, the median
which is the middle number when the array is sorted, and the mode which is the number that
appears the most.

*/

function meanMedianMode(arr){

    arr.sort(function(a,b){
        return a-b;
    })
    
    console.log(arr);
    
    // calculcate median
    var median;
    var mean;
    var mode;
    var modeCount = 0;
    var sum = 0;
    
    // key: element, value: frequency
    var hashTable = {};
    
    for (var element of arr){
        sum += element;
        
        if(hashTable[element] === undefined){
            hashTable[element] = 1;
        }
        else{
            hashTable[element] += 1;
        }
    }
    
    // Calculate mean
    mean = sum/arr.length;
    
    for (var key in hashTable){
        if(hashTable[key] > modeCount){
            modeCount = hashTable[key]
            mode = key;
        }
    }
    
    var middle = Math.floor(arr.length/2);
    
    
    if( (arr.length % 2) === 1){
        median = arr[middle];
    }
    else{
        median = (arr[middle] + arr[middle-1])/2;
    }
   
    
    if(modeCount === 1){
        mode = "No mode";
    }
    
    console.log("Mean: " + mean);
    console.log("Mode: " + mode);
    console.log("Median: " + median);

}

var arr = [1, 6, 2, 3, 4, 5, 7, 5, 8];
meanMedianMode(arr);