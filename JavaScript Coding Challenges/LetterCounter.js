/*

Have the function LetterCountI(str) take the str parameter being passed and return the first word with 
the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's)
and it comes before ever which also has 2 e's. 
If there are no words with repeating letters return -1. Words will be separated by spaces. 

*/

function LetterCountI(str) { 
    
    var strArray = str.split(" ");
    
    var maxIndex = 0;
    var currentMax = 0;
    var globalMax = 0;
    
    for (var i = 0; i < strArray.length; i++){
        
        let hashTable = {}
        
        for (var j = 0; j < strArray[i].length; j++){
         
            let char = strArray[i][j];
            
            if (hashTable[char] === undefined){
                // add to hashtable
                hashTable[char] = 1;
            }
            else{
                // value already in hash table
                hashTable[char] = hashTable[char] + 1;
            }
            
            // get letter count that occurs most
            for (var key in hashTable){
                
                if (hashTable[key] > currentMax){
                    currentMax = hashTable[key];
                }
            }
            
            if (currentMax > globalMax){
                globalMax = currentMax;
                maxIndex = i;
            }
            
        }
    }
    
    if (globalMax === 1){
        return -1;
    }
    else{
        return strArray[maxIndex]; 
    }
         
}
   
// keep this function call here 
LetterCountI(readline());