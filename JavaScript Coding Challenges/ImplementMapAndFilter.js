/*

Map and filter are common functional programming methods that you’ve most likely used when
coding. They are both functions that take in a list, perform some operation on that list without
changing the original list, and then return a new lists. The functions do not change any other variables
and do not touch anything else except those lists they were given. JavaScript, Python, and Ruby all
have their own built-in versions of these functions, but we are going to impement our own.

Map works by taking a list and a function, and it applies the function to each element in the list and
returns a new list. For example, you may want to square every number in an array or append a string
to every element in an array. We want an implementation where we can pass in two parameters, one
being the array and the second being some function that will be mapped onto every element.

Filter works by taking a list and a conditional statement, and it returns a new list where every
element in the original list passes the conditional (returns true). For example, you may have a list of
ages and you want a new list of ages where each one is between 21 and 35. We want an
implementation where, similar to the map function, we pass in a list and a function that contains
within it a conditional statement.
Some extra resources on functional methods are listed below:

*/


/// Map Portion
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = arr;


console.log("Map Part")
console.log("Initial array: " + arr );

var a  = arr.map(function(ele){
  return ele * ele;
})

console.log("JavaScript Map Result: " + a);

function mapFunct(func, arr){
  
  for (var i = 0; i < arr.length; i++){
    
      arr[i] = func(arr[i]);
  }
  
  return arr;
}

function sqr(ele){
  return ele*ele;
}

console.log("Custom Map Result: " + mapFunct(sqr, arr2));
console.log("\nFilter Part")

// Filter Portion
var arr3 = [ 2, 4, 8, 0, 1, 16, 15, 21, 14, 7, 10, 19, 13, 24];
console.log("Initial array: " + arr3);

// Teenage checker
var arr4 = arr3.filter(function(ele){
  return (ele >=13) && (ele <=19);
})

console.log("JavaScript Filter: " + arr4);
console.log("JavaScript Filter: " + myFilter(isTeenager, arr3));



function myFilter(func, arr){
  
  var newArr = [];
  
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])){
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function isTeenager(num){
  return (num >= 13) && (num <= 19);
}







