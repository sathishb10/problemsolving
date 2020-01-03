
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
  * 
  * 
  // * //
  // -----------------------------------------------------------------------------------

  

function alpha(n){
  for(var i=1;i<=n;i++){
      var str=""
      // k=i;
      for(var j=1;j<=i;j++ ){
          str=str+(String.fromCharCode(64+j))
      }
      // k--;
      for(var k=i-1;k>=1;k--){
          str=str+(String.fromCharCode(64+k))
      }
      console.log(str)
  }
  
  }
  alpha(7)
  
  // A
  // ABA
  // ABCBA
  // ABCDCBA
  // ABCDEDCBA
  // ABCDEFEDCBA
  // ABCDEFGFEDCBA

  // =-----------------------------------------------------------------------------------------

  function square(n){
    var s=n*2
    var arr=[]
  for(var i=1;i<=s;i++){
      var str=[];
      for(var j=1;j<=s;j++){
          if(i==j || i==s+1-j ){
              str.push("@")
          }
          else{
              str.push(" ")
          }
 
      }
    console.log(str)
  }
 //  return arr
 
 }
 square(5)


 / function startalpha(n){
  // for(let i=1;i<=n;i++){
  //      var str=""
  //      for(let j=i;j<n;j++){
  //        str=str+("*")+(" ")
  //      }
  //      for(let k=i;k>=1;k--)
  //      {
  //        str=str+(String.fromCharCode(k+96))+(" ")
  //      }
  //      console.log(str)
  // }
  // }
  // startalpha(9)
  // * * * * * * * * a
  // * * * * * * * b a
  // * * * * * * c b a
  // * * * * * d c b a
  // * * * * e d c b a
  // * * * f e d c b a
  // * * g f e d c b a
  // * h g f e d c b a
  // i h g f e d c b a
  
  
  