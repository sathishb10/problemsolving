    *
   * *
  * * *
 * * * *
 * * * * *
* * * * * *
 * * * * *
   * * * *
   * * *
   * *
    *

function pyramid(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(let j=n;j>i;j--){
        str=str+(" ")
      }
      for(let j=0;j<i;j++){
           str=str+("*")+(" ")
      }
      console.log(str)
    }
     for(var i=1;i<=n;i++){
      var str=""
      for(let j=1;j<=i;j++){
        str=str+(" ")
      }
      for(let j=n;j>i;j--){
           str=str+("*")+(" ")
      }
      console.log(str)
    }
  
  }
  pyramid(6)