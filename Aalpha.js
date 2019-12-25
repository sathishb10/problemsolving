
function aalpha(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(let k=i;k<n;k++){
        str=str+(" ")
      }
      for(let j=1;j<=i;j++){
         var kk=Math.ceil(n/2)
  
         if(j==1 || j==i || kk==i){
          str=str+"*"+(" ")
        }
        else{
          str=str+(" ")+(" ")
        }
     
      }
      console.log(str)
    }
  
  }
  aalpha(11)
  
            *
           * *
          *   *
         *     *
        *       *
       * * * * * *
      *           *
     *             *
    *               *
   *                 *
  *                   *