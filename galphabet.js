function Galphabet(n){

    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
        var kk=Math.ceil(n/2)
       if((j==1 && i!=1 && i!=n) || (i==1 && j!=1) || (i==n && j!=1) ||  (kk<=i && j==n) || (kk<=j && i==kk)  ){
          str=str+("*")+(" ")
       }
       else{
         str=str+(" ")+(" ")
  
       }
            
      }
      console.log(str)
    }
  
  }
  Galphabet(9)
  