      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1

  
function ones(n){
  for(var i=1;i<=n;i++){
    var str=" "  
    for(let k=n;k>=i;k--){
       
         str=str+(" ")

       }

    for(let j=1;j<=i;j++){
       
       if(i==j || j==1){
         str=str+("1")+(" ")

       }
       else{
         if(i==n && j==3){
          str=str+(i+1)+(" ")
         }
         else{
         str=str+(i-1)+(" ")

         }


       }

    }
    console.log(str)

  }

}
 ones(5)