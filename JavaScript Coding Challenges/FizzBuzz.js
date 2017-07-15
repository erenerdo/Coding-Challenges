/*
    Question:
    
    Print out all the numbers from 1 to 100. But for every number divisible by 3 replace it with the word “Fizz,” 
    for any number divisible by 5 replace it with the word “Buzz” and 
    for a number divisible by both 3 and 5 replace it with the word “FizzBuzz.”
*/

function fizzBuzz(num){
  
  for (let i = 1; i <= num; i++){
      
    let str = "";
      
    if (is3(i))
      str += "Fizz";
    if (is5(i))
      str += "Buzz";
    
    if(str === "")
      console.log(i);
    else
      console.log(str);
  }
  
}

function is5(num){ return ((num%5) === 0); }
function is3(num){ return ((num%3) === 0); }

// Testing Driver

var n = 37;

fizzBuzz(n);