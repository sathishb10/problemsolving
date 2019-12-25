*****     *****
*******   *******
********* *********
*******************
*****************
 ***************
  *************
   ***********
    *********
     *******
      *****
       ***
        *

        73
function starlovshape(n){
    for(let i=n/2;i<=n;i+=2){
      // console.log(i)
     var strr=""
    for(let j=1;j<n-i;j+=2){
        strr=strr+(" ")
    }
    for(let k=1;k<=i;k++){
      strr=strr+("*")
    }
    for(let j=1;j<=n-i;j++){
      strr=strr+(" ")
    }
    for(let jj=1;jj<=i;jj++){
      strr=strr+("*")
    }
    console.log(strr)
    
    }
      for(let i=0;i<n;i++){
        var str=""
        for(let ii=1;ii<=i;ii++){
          str=str+(" ")
        }
        for(var j=i;j<n;j++){
          str =str+("*")
        }
        for(let k=n-1;k>i ;k--){
    
          str=str+("*")
        }
        console.log(str)
      }
    
    }
    starloveshape(10)
    
    