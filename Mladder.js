

function lady(n) {
    var k = n + n - 1;
    var l;
    for (var i = 1; i <= k; i++) {
        var str = ""
        for (var j = 1; j <= k; j++) {
            if (i <= n) {
                l = i
            }
            else {
                // console.log(n-i%n+"kk") 4,3,2,1
                l = n - (i % n)
                //// console.log(l)
            }
            if (j <= l) {
                str = str + (j)
            }
            else if (j >= k - l + 1) {
                str = str + (k - j + 1)

            }
            else {
                str = str + (" ")
            }
        }
        console.log(str);
    }
}
lady(7);

// Hint: hit control+c anytime to enter REPL.
// 1           1
// 12         21
// 123       321
// 1234     4321
// 12345   54321
// 123456 654321
// 1234567654321
// 123456 654321
// 12345   54321
// 1234     4321
// 123       321
// 12         21
// 1           1
// // 
// ----------------------------------------------------------

function two(n,k){

    for(var i=n;i<=k;i++){
       var str=""
        for(var j=n;j<=i;j++){
            str=str+(i)
        }
        console.log(str)
       }
     for(var i=k-1;i>=n;i--){
    var str=""
     for(var j=i;j>=n;j--){
         str=str+(i)
 
     }
     console.log(str);
 }
 
 
 }
 
//  two(5,9)
//  5
//  66
//  777
//  8888
//  99999
//  8888
//  777
//  66

// -----------------------------------------------------------------------------------------

function ladder(n){
    var arr=[];
    for(var i=1;i<=7+4*(n-1);i++){
      if(i%4==0){
     console.log("*"+"*"+"*")
      }
      else{
     console.log("*"+" "+"*")
      }
    }
  }
  ladder(4)


  function numberdimaond(n){
    for(var i=0;i<n;i++){
      str=""
      for(let j=1;j<=n-i;j++){
          if(j!=n){
           str=str+(j)
          }
      }
       for(let k=0;k<=(i*2)-2;k++){
        str=str+(" ")
      }
       for(let j=n-i;j>0;j--){
        str=str+(j)
      }
      console.log(str)
    }
      for(var i=n-1;i>=0;i--){
      str=""
      for(let j=1;j<=n-i;j++){
          if(j!=n){
           str=str+(j)
          }
      }
       for(let k=0;k<=(i*2)-2;k++){
        str=str+(" ")
      }
       for(let j=n-i;j>0;j--){
        str=str+(j)
      }
      console.log(str)
    }
  }
   numberdimaond(8)

// 123456787654321
// 1234567 7654321
// 123456   654321
// 12345     54321
// 1234       4321
// 123         321
// 12           21
// 1             1
// 1             1
// 12           21
// 123         321
// 1234       4321
// 12345     54321
// 123456   654321
// 1234567 7654321
// 123456787654321


// function abc(n){

//   for(var i=1;i<=n;i++){
//     var str=""
//     for(let j=0;j<=n-i;j++){
//       if(j!=n-1){
//         str=str+(String.fromCharCode(j+65))
//       }
//     }
//     for(let k=1;k<(i*2)-2;k++){function
//       str=str+(" ")
//     }
//     for(let j=n-i;j>=0;j--){   
//       str=str+(String.fromCharCode(j+65))
//     }
//     console.log(str)
//   }


//   for(var i=n;i>0;i--){
//     var str=""
//     for(let j=0;j<=n-i;j++){
//       if(j!=n-1){
//         str=str+(String.fromCharCode(j+65))
//       }
//     }
//     for(let k=1;k<(i*2)-2;k++){
//       str=str+(" ")
//     }
//     for(let j=n-i;j>=0;j--){   
//       str=str+(String.fromCharCode(j+65))
//     }
//     console.log(str)
//   }

// }
// abc(8)
// Hint: hit control+c anytime to enter REPL.
// ABCDEFGHGFEDCBA
// ABCDEFG GFEDCBA
// ABCDEF   FEDCBA
// ABCDE     EDCBA
// ABCD       DCBA
// ABC         CBA
// AB           BA
// A             A
// A             A
// AB           BA
// ABC         CBA
// ABCD       DCBA
// ABCDE     EDCBA
// ABCDEF   FEDCBA
// ABCDEFG GFEDCBA
// ABCDEFGHGFEDCBA
