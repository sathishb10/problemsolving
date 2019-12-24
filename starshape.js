
[ '**************',
'******  ******',
'*****    *****',
'****      ****',
'***        ***',
'**          **',
'*            *',
'*            *',
'**          **',
'***        ***',
'****      ****',
'*****    *****',
'******  ******',
'**************' ]
function starshape(n){
var arr=[]
for(var i=n;i>0;i--){
  str=""
  for(var j=0;j<i;j++){
   str=str+("*")
  }  
  for(let k=n;k>i;k--){
    str=str+("  ")
  }
  for(var j=i;j>0;j--){
   str=str+("*")
  }  
arr.push(str)
}
  for(var i=1;i<=n;i++){
  str=""
  for(var j=0;j<i;j++){
   str=str+("*")
  }  
  for(let k=n;k>i;k--){
    str=str+("  ")
  }
  for(var j=i;j>0;j--){
   str=str+("*")
  }  
arr.push(str)
}
return arr;


}
starshape(7)


function starshape(n){
    var arr=[]
    for(var i=n;i>0;i--){
      str=""
      for(var j=0;j<i;j++){
       str=str+("*")
      }  
      for(let k=n;k>i;k--){
        str=str+("  ")
      }
      for(var j=i;j>0;j--){
       str=str+("*")
      }  
    arr.push(str)
  
    }
  
   var arr2=[...arr]
  arr[7] = arr[6]
  arr[8] = arr[5]
  arr[9] = arr[4]
  arr[10] = arr[3]
  arr[11]=arr[2]
  arr[12]=arr[1]
  arr[13]=arr[0]
  
   return arr;