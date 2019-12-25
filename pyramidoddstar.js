        *

    * * *

   *   *   *

*     *     *

*       *       *

* * * * * * * * * * *

*       *       *

*     *     *

*   *   *

* * *
  *


function pyramidodd(n){
for(var i=1;i<=n;i++){
var str=""
for(var k=n;k>=i;k--){
str=str+(" ")
}
for(let j=1;j<=i;j++){
var kk=Math.ceil(i/2)  
if((i%2==1) && (j==1 || j==i  || kk==j || i==n ) ){
   str=str+("*")+(" ")
}
else{
str=str+(" ")+(" ")
}

}
console.log(str)
}
for(var i=2;i<=n;i++){
var str=" "
var kk;
for(var k=1;k<i;k++){
str=str+(" ")
}
for(let j=0;j<=n-i;j++){
  kk=Math.ceil( (n-i)/2)
if((i%2==1 && i!=1) && (j==0 || j==n-i || j==kk) ){
   
   str=str+("*")+(" ")

}
else {

str=str+(" ")+(" ")

}

}

console.log(str)
}


}
pyramidodd(11)

