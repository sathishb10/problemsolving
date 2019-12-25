

function primenumber(n){
    for(let i=1;i<=n;i++){
      var str=""
    for(let k=1;k<i;k++){
       str=str+("* ")
    }
    for(let j=1, k=n-i+1; j<=n-i+1 , k>=1 ;j++,k--){
    str=str+(j)+(" ")+(k)+(" ")
    }
    for(let t=1;t<i;t++ ){
      str=str+("* ")
    }
  console.log(str)
    }
  }
  primenumber(7)
  1 7 2 6 3 5 4 4 5 3 6 2 7 1
  * 1 6 2 5 3 4 4 3 5 2 6 1 *
  * * 1 5 2 4 3 3 4 2 5 1 * *
  * * * 1 4 2 3 3 2 4 1 * * *
  * * * * 1 3 2 2 3 1 * * * *
  * * * * * 1 2 2 1 * * * * *
  * * * * * * 1 1 * * * * * *
  
  