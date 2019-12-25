

function numberdimaond(n){
  
    for(var i=0;i<n;i++){
      str=""
      for(let j=1;j<=n-i;j++){
          if(j!=n){
           str=str+(j)
          }
      }
       for(let k=0;k<=(i*2)-2;k++){
  
        str=str+(" ")
      }
      
       for(let j=n-i;j>0;j--){
  
        str=str+(j)
      }
  
      console.log(str)
    }
      for(var i=n-1;i>=0;i--){
      str=""
      for(let j=1;j<=n-i;j++){
          if(j!=n){
           str=str+(j)
          }
      }
       for(let k=0;k<=(i*2)-2;k++){
  
        str=str+(" ")
      }
      
       for(let j=n-i;j>0;j--){
  
        str=str+(j)
      }
  
      console.log(str)
    }
  
  }
  numberdimaond(8)
  123456787654321
  1234567 7654321
  123456   654321
  12345     54321
  1234       4321
  123         321
  12           21
  1             1
  1             1
  12           21
  123         321
  1234       4321
  12345     54321
  123456   654321
  1234567 7654321
  123456787654321