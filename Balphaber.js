function Balpha(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
      var kk=Math.ceil(n/2)
  if( j==1 || (i==1 && j!=n ) || ( j!=n && i==n ) ||(kk==i && j!=n) ||(j==n && i!==1 && i!=n && i!=kk )){
          str=str+"*"
        }
    
      
      else{
       str=str+(" ")
      }
  
    }
    console.log(str)
    }
  
  }
  Balpha(7)
  ******
  *     *
  *     *
  ******
  *     *
  *     *
  ******
  