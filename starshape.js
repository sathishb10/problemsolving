
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

