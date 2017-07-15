/*

Finding the majority element in an array involves finding an element that appears strictly more than
n/2 times where n is the size of the array. For example, in the array [1, 4, 5, 5, 5, 5] the
element 5 appears 4 times and n/2 = 6/2 = 3, so the element 5 is the majority element. If on the other
hand the array was [1, 4, 4, 5, 5] then the element 5 is not the majority element. There
actually is no majority element because no element appears more than n/2 = 5/2 = 2 times.

*/
function findMajority(arr){
	
	let len = Math.floor(arr.length/2);
	
	let HashTable = {};
	
	for (var ele of arr){
	  
	  if(HashTable[ele] === undefined){
	    // number not in hashtable
	    HashTable[ele] = 1;
	  }
	  else{
	    // element already in hashtable, increment increment
	    HashTable[ele] += 1;
	  }
	}
	
	var majorityEle;
	var count = 0;
	
	for (var key in HashTable){
	    
	    if  (HashTable[key] > count){
	        count = HashTable[key];
	        majorityEle = key;
	    }
	}

	if(count > len){
	    return majorityEle;
	}
	else {
	    return "No majority";
	}
}

console.log(findMajority([1, 4, 5, 5, 5, 5]));