[ [ 1, 2, 3, 4, 5 ],
  [ 16, 17, 18, 19, 6 ],
  [ 15, 24, 25, 20, 7 ],
  [ 14, 23, 22, 21, 8 ],
  [ 13, 12, 11, 10, 9 ] ]

function spiralclock(n){
    let array=new Array(n).fill().map(()=>new Array(n).fill(''))
    let counter=1;
    let startCol=0;
    let endCol=n-1;
    let startRow=0;
    let endRow=n-1;
    while(startCol<=endCol && startRow<=endRow){
      for(let i=startCol;i<=endCol;i++){
          array[startRow][i]=counter;
          counter++
      } 
       startRow++
      for(let j=startRow; j<=endRow;j++ ){
  // console.log(j, endCol) //1,4 2,4 3,4 4,4
        array[j][endCol]=counter;   //endRow
        counter++
  
      }
      endCol--
    
    for(let k=endCol;k>=startCol;k--){
      // console.log(endRow , k); 43 42 41 40
      array[endRow][k]=counter;
       counter++
    }
  // return array
  endRow--
  
  for(let t=endRow; t>=startRow;t--){
  
    array[t][startCol]=counter
    counter++
  }
  startCol++
    }
    
    return array;
  
  
  }
  
  
  spiralclock(5)
  
  