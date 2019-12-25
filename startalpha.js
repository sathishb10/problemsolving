function startalpha(n){
    for(let i=1;i<=n;i++){
         var str=""
         for(let j=i;j<n;j++){
           str=str+("*")+(" ")
         }
         for(let k=i;k>=1;k--)
         {
           str=str+(String.fromCharCode(k+96))+(" ")
         }
         console.log(str)
    }
    }
    startalpha(9)
    // * * * * * * * * a
    // * * * * * * * b a
    // * * * * * * c b a
    // * * * * * d c b a
    // * * * * e d c b a
    // * * * f e d c b a
    // * * g f e d c b a
    // * h g f e d c b a
    // i h g f e d c b a