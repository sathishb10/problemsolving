function ealphabet(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
        var kk=Math.ceil(n/2)
       if(j==1 || i==1 ||i==n || kk==i ){
          str=str+("*")
       }
       else{
         str=str+" "
  
       }
            
      }
      console.log(str)
    }
  
  }
  ealphabet(9)
  *********
  **
  **********
  *
  **
  *********