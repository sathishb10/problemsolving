function hourglassSum(arr) {
    var sum=-500;
   for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr[i].length-2;j++){

var sumone=arr[j][i]+arr[j][i+1]+arr[j][i+2]+arr[j+1][i+1]+
          arr[j+2][i]+arr[j+2][i+1]+arr[j+2][i+2];
if(sumone>sum){
 sum=sumone;
}
}
}
return sum;
}
//  var arr= [
//      [1, 1, 1, 0, 0, 0],
//      [0 ,1 ,0 ,0 ,0 ,0],
//      [1, 1, 1, 0, 0, 0],
//      [0, 0, 2, 4, 4, 0],
//      [0 ,0 ,0 ,2 ,0 ,0],
//      [0, 0, 1, 2, 4, 0],
  //  ]

// hourglassSum(arr);

// --------------------------------------------------------

function rotLeft(a, d) {
return a.splice(d).concat(a.slice(0,d))


}
//rotLeft([1 ,2, 3, 4, 5],4)

// ---------------------------------------------------

function minumswaps(arr){
 var result=0;
 for(var i=0;i<arr.length;i++){
    result +=swapArray(arr,i)
 }
return result;
}

function swapArray(arr,index){
   //+console.log(index) //0,1,2,3,
    let Count=0
   let current=arr[index]; //4 

   let target= arr[current-1];   //2 7
       // 2 =! 3
      // console.log(current+" "+target)
   while(current !== target){
       arr[index]=target; //a[0] //2  (currrnet-1)arr[3] 4
       arr[current-1]= current; //2314     // 3214
       console.log(arr)
       Count +=1; //
       current= target; // 2 last //3
       console.log(current +"c")
       target=arr[current-1] //3 arr[1]  // 1 arr[2] 
       console.log(target +"t")
   }
return Count;


}

// // minumswaps([4 ,3 ,1 ,2])
// ---------------------------------------------------------------

// it is shift the queriy in to the rang of  1 & 2 =100
// for example n means number of inputs we have to manupluate the array. if it is given 5 we have to set it as the given order.



function arrayManipulation(n, queries){
   const arr= Array(n); 
   // console.log(arr)
   let maxvalue=0;
   queries.forEach(([startRange, endRange,value])=>{
  //startrange 1,2,3 endrange 2,5,4, value 100 100 100
arr[startRange]= arr[startRange] || {start: 0, end:0}
arr[endRange]= arr[endRange] || {start: 0, end:0}
arr[startRange].start  +=value;
arr[endRange].end      +=value;
   });

// console.log(arr);
// 1 { start: 100, end: 0 }
// 2{ start: 100, end: 100 }  //2
// 3{ start: 100, end: 0 }
// { start: 0, end: 100 }   //4
// { start: 0, end: 100 }      //5 //cell
let currentNumber=0;
arr.forEach((cell)=>{
   //console.log(cell);
   if(cell){
        //console.log(cell.start)
       currentNumber +=cell.start;
      

       if(currentNumber>maxvalue){
//console.log(currentNumber);
           maxvalue=currentNumber;
       }
         console.log(currentNumber +"kk");
       currentNumber -=cell.end;
    console.log(currentNumber +"DD");
   }
});
return maxvalue;

}
var arr=[
   [1, 2, 100],
   [2 ,5, 100],
   [3, 4, 100]]

arrayManipulation(5,arr )

