
function abc(n){

    for(var i=1;i<=n;i++){
      var str=""
      for(let j=0;j<=n-i;j++){
        if(j!=n-1){
          str=str+(String.fromCharCode(j+65))
        }
      }
      for(let k=1;k<(i*2)-2;k++){
        str=str+(" ")
      }
      for(let j=n-i;j>=0;j--){   
        str=str+(String.fromCharCode(j+65))
      }
      console.log(str)
    }
  
  
    for(var i=n;i>0;i--){
      var str=""
      for(let j=0;j<=n-i;j++){
        if(j!=n-1){
          str=str+(String.fromCharCode(j+65))
        }
      }
      for(let k=1;k<(i*2)-2;k++){
        str=str+(" ")
      }
      for(let j=n-i;j>=0;j--){   
        str=str+(String.fromCharCode(j+65))
      }
      console.log(str)
    }
  
  }
  abc(8)
  Hint: hit control+c anytime to enter REPL.
  ABCDEFGHGFEDCBA
  ABCDEFG GFEDCBA
  ABCDEF   FEDCBA
  ABCDE     EDCBA
  ABCD       DCBA
  ABC         CBA
  AB           BA
  A             A
  A             A
  AB           BA
  ABC         CBA
  ABCD       DCBA
  ABCDE     EDCBA
  ABCDEF   FEDCBA
  ABCDEFG GFEDCBA
  ABCDEFGHGFEDCBA