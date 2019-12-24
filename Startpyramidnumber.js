
[ '1',
'2*2',
'3*3*3',
'4*4*4*4',
'5*5*5*5*5',
'6*6*6*6*6*6',
'7*7*7*7*7*7*7',
'8*8*8*8*8*8*8*8',
'8*8*8*8*8*8*8*8',
'7*7*7*7*7*7*7',
'6*6*6*6*6*6',
'5*5*5*5*5',
'4*4*4*4',
'3*3*3',
'2*2',
'1' ]
function numpyramid(n){
var arr=[]
for(var i=1;i<=n;i++){
     var str=""
  for(var j=1;j<=i;j++){
    if(j==1){
  str=str+(i)
    }
    
  
  else{
    str=str+("*")+(i)
  }
 
}
arr.push(str)

}
var arr2= [...arr]
arr[8] = arr[7]
arr[9] = arr[6]
arr[10] = arr[5]
arr[11] = arr[4]
arr[12]=arr[3]
arr[13]=arr[2]
arr[14]=arr[1]
arr[15]=arr[0]
return arr;

//   for(var i=n;i>=1;i--){
//        var str=""
//     for(var j=1;j<=i;j++){
//       if(j==1){
//             str=str+(i)
//       }
//       else{
//  str=str+("*")+(i)
//       }
   
//     }
//     console.log(str)
//   }

}
numpyramid(8)