       *
      * *
     *   *
    *     *
   *       *
  *         *
  *         *
   *       *
    *     *
     *   *
      * *
       *
function pyramid(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(let j=n;j>i;j--){
        str=str+(" ")
      }
      for(let j=0;j<i;j++){
        if(j==0 ||j==i-1){
     
           str=str+("*")+(" ")
  
      }
      else{
        str=str+(" ")+(" ")
      }
      }
      console.log(str)
    }
    
     for(var i=1;i<=n;i++){
      var str=""
      for(let j=1;j<i;j++){
        str=str+(" ")
      }
      for(let j=n;j>=i;j--){
        if(j==n || j==i){
           str=str+("*")+(" ")
      }
      else{
         str=str+(" ")+(" ")
      }
      }
      console.log(str)
    }
  
  }
  pyramid(6)
  
    