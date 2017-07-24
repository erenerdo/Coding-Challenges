/*

Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being 
passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct 
subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] 
where the I's stand for integers and the E means take out the smallest integer currently in the whole set. 
When finished, your program should return that new set with integers separated by commas. For example: 
if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 

*/

function OffLineMinimum(strArr) { 

    let vals = [];
    let hashTable = {};
    
    
    for (let str of strArr){
        
        // str is not E so must be a number
        if(str !== "E"){
            // str is a number 
            if(Number(str) < min){
                min = Number(str);
            }
            
            // Store nums value in hashTable
            if(hashTable[str] === undefined){
                hashTable[str] = 1;
            }
            else{
                hashTable[str] += 1;
            }
            
        }
        else{
            var min = 250000000;
            
            for (let key in hashTable){
                if(key < min){
                    min = key;
                }   
            }
            vals.push(min);
            
            if(hashTable[min] === 1){
                delete hashTable[min];
            }
            else{
                hashTable[min] -= 1;
            }
            
            
        }
        
    }
    
    
    
    return vals.join(",");        
}

var arr = ["4","E","1","E","2","E","3","E"]

OffLineMinimum(arr);
