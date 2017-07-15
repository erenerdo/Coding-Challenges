/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(integers, target) {
  // your solution here

  // Create Hash Table
  let HashTable = {};

  // To be used to store return values
  let arr =[];

  // First put all values in hash table;
  for (let i = 0; i < integers.length; i++){
  	// Assign number for simplicity
  	let num = integers[i];

  	if(HashTable[num] === undefined){
  		// Value not in hash table add it
  		HashTable[num] = num;
  	}

  }

  // Now we will iterate to see if we can make a pair that sums to target
  // If (target - integer[i]) is in our hash table then there is a pair that exist

  for (let i = 0; i < integers.length; i++){
  	// Assign current number for simplicity
  	let num = integers[i];

  	if(HashTable[target-num] !== undefined){
  		arr.push(num);
  		arr.push(target-num);
  		return arr;
  	}

  }

  return arr;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
