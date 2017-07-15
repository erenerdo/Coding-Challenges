/*
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. If there are two or more words that 
are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

*/

function LongestWord(sen) { 
    var wordArray = sen.split(" ");
    
    var maxValue = 0;
    var maxIndex = 0;
    
    for(var i = 0; i < wordArray.length; i++){
        
        if(wordArray[i].length > maxValue){
            maxValue = wordArray[i].length;
            maxIndex = i;
            
        }
    }

    return wordArray[maxIndex];
         
}
   
// keep this function call here 
LongestWord(readline());