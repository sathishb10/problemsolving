function Dalphabet(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
       if(j==1 || (i==1 && j!=n)||(i==n && j!=n) || (j==n && i!=1 && i!=n) ){
          str=str+("*")
       }
       else{
         str=str+" "
  
       }
            
      }
      console.log(str)
    }
  
  }
  ealphabet(8)
  
  *******
  *      *
  *      *
  *      *
  *      *
  *      *
  *      *
  *******