/*

Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (ie. "All cows eat grass 
and moo" would return 8). Do not count y as a vowel for this challenge. 

*/

function VowelCount(str) { 
    
    let vowelCount = 0;
    
    let vowelHash = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    };

    for (let i = 0; i < str.length; i++){
        if (vowelHash[str[i]] !== undefined){
            // character is a vowel
            vowelCount++;
        }
    }
  // code goes here  
  return vowelCount; 
         
}
   
// keep this function call here 
VowelCount(readline());