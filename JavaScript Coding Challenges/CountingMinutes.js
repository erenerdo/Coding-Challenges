/*

Have the function CountingMinutesI(str) take the str parameter being passed which will be two times 
(each properly formatted with a colon and am or pm) separated by a hyphen and return the total number 
of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 
9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

*/

function CountingMinutesI(str) { 
    
    // Seperate the times
    let time1 = "";
    let time2 = "";
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "-"){
            time1 = str.substr(0, i);
            time2 = str.substr(i+1, str.length);
            break;
        }
    }
 
    
    let mTime1 = convertTime(time1);
    let mTime2 = convertTime(time2);
    
    let diff = mTime2-mTime1;
    
    if (diff < 0){
        return 1440 + diff;
    }
    
    return diff;
    
         
}

function convertTime(time){
    
    let mTime = 0;
    // convert times to military time
    for(let i = 0; i < time.length; i++){
     
        if(time[i] === ":"){
            
            let hour;
            if(time.substring(0, i) == 12){
                hour = 0;
            }
            else{
                hour = Number(time.substring(0, i));
            }
            let minute = Number(time.substring(i+1, i+3));
            mTime = hour*60 + minute;
        }
        if(time[i] === "p"){
            mTime += 12*60;
            break;
        }
    }
    
     return mTime;
}
   
// keep this function call here 
CountingMinutesI(readline());