function RectangleArea(strArr) { 

  let xMin = Number.MAX_VALUE;
  let xMax = Number.MIN_VALUE;
  let yMin = Number.MAX_VALUE;
  let yMax = Number.MIN_VALUE;
  
 for (let str of strArr){
     
    str = str.substring(1, str.length-1);
    coordinates = str.split(" ");
    let xCor = Number(coordinates[0]);
    let yCor = Number(coordinates[1]);


 
      if (xCor > xMax){
          xMax = xCor;
      }
      else if (xCor < xMin){
          xMin = xCor;
      }
      
      if (yCor > yMax){
          yMax = yCor;
      }
      else if (yCor < yMin){
          yMin = yCor;
      }
      
  }
 
  
  let width = Math.abs(xMax - xMin);
  let height = Math.abs(yMax - yMin);

  
  return width*height;
         
}
   
// keep this function call here 
RectangleArea(readline());