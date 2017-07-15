/*

Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

*/

function MeanMode(arr) { 
    
    let sum = 0;
    let mode = 0;
    let modeVal;
    let mean;
    let hashTable = {};
    
    arr.forEach(function(element){
        
        sum += element;
        
        if(hashTable[element] === undefined){
            // element not in hashtable
            hashTable[element] = 1;
        }
        else{
            hashTable[element] = hashTable[element] + 1;
        }
          
    })
    
    mean = sum/(arr.length);
    
    for (var key in hashTable){

        if (hashTable[key] > mode){
          
            mode = hashTable[key];
            modeVal = Number(key);
        }
        
    }
    
    
    
    console.log(mean);
    console.log(modeVal);

    if(modeVal === mean){
        return 1;
    } 
    else{
        return 0;
    }
         
}
   
// keep this function call here 
MeanMode(readline());