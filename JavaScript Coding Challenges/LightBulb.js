/*

Imagine
there are 100 light bulbs, labeled from 1 to 100, lined up all set to off initially. There are also 100
people each numbered 1 to 100 as well. Person 1 will go through all the light bulbs and flip the switch
turning all of them on. Then person number 2 will go through all the light bulbs and flip the switch on
each 2nd element turning them off, namely: light bulbs #2, #4, #6, #8, etc. Then person 3 will go and
do the same for the 3rd ligh bulb, 6th, 9th, etc. Then questions are usually asked about the light bulbs,
for example:
• How many light bulbs will be on after 100 people have gone through them?
• What is the status of the Nth light bulb (34th, 62nd, etc.)? Is it on or off?
• How many people need to go through the line of light bulbs until exactly K light bulbs are set
to on?

*/

function lightBulbs(num){
    
    var lightArray = [];
    
    // Set all lightBulbs to false
    for (let i = 0; i < num; i++){
        lightArray[i] = false;
    }
    
    for (let i = 1; i <= num; i++){
        for (let j = i-1; j < num; j += i){
            // flip the switch
            lightArray[j] = !lightArray[j];
        }
    }
    
    var count = 0;
    
    for (var ele of lightArray){
        if(ele)
            count++;
    }
    
    return "Number of lighbulbs on out of " + num + " is " + count;
    
}

lightBulbs(99);

// Number of lightbuls on is Math.floor(Math.sqrt(num));





