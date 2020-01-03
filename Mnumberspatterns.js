function kk(n){
    for(var i=1;i<=n;i++){
        var str=""
        for(var j=i;j<n;j++){  //var j=i;j<=n;j++)
            str=str+(j)
        }
        for(var k=n;k>=i;k--){ //k=n-1;k>=i;k--
            str=str+(k);
        }
        console.log(str)
    }
}
 kk(5)

123454321
2345432
34543
454
5
// -------------------------------------------------------------

function accendingnumbers(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        str=str+(j)
      }
        for(var j=i-1;j>=1;j--){
        str=str+(j)
      }
      console.log(str)
    }
    }
    accendingnumbers(7)
    1
    121
    12321
    1234321
    123454321
    12345654321
    // 1234567654321
    // ------------------------------------------------------------


    function pyramidnumberstar(k){
        for(var i=1;i<=k;i++){
          var str=""
          for(var j=1;j<=i;j++){
            str=str+(j);
            if(i!=j){
              str=str+("*")
            }
          }
          console.log(str)
        }
         for(var i=k-1;i>=1;i--){
          var str=""
          for(var j=1;j<=i;j++){
            str=str+(j);
            if(i!=j){
              str=str+("*")
            }
          }
          console.log(str)
        }
      
      }
      pyramidnumberstar(7)
      1
1*2
1*2*3
1*2*3*4
1*2*3*4*5
1*2*3*4*5*6
1*2*3*4*5*6*7
1*2*3*4*5*6
1*2*3*4*5
1*2*3*4
1*2*3
1*2
// 1
// --------------------------------------------------

// function numberpyramid(n){
//     for(var i=1;i<=n;i++){
//       var str=""
//       for(var k=n;k>=i;k--){
//         str=str+(" ")
//       }
//       for(var j=1;j<=i;j++){
//         str=str+(j)+(" ")
//       }
//       console.log(str)
//     }
  
//   }
//   numberpyramid(9)

//   1
//   1 2
//  1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9

// --------------------------------------------------------------------

function ui(n){
    for(var i=1;i<=n;i++){
        var str=""
        for(var k=i;k<=n;k++){
            str=str+(" ")
        }
       k=i
       for(var j=1;j<=i;j++){
          str=str+(k++);   
       }
    //   console.log(k)
         k--;
       for(var t=1;t<i;t++){
           str=str+(--k);
       }
       console.log(str)
    }

}
ui(5)

  1
  232
 34543
 4567654
 567898765

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
//    ones(5)
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1


// ----------------------------------------------------

// function  addbefore(n){ 

// for(let i=1;i<=n;i++){
//   var str=" "
//   var fact=0;
//   var fact1=1;
//   for(let j=1;j<=i;j++){
//     temp=fact+fact1;
//     str=str+temp+" "
//     fact=fact1
//     fact1=temp
//   }
//    console.log(str)
// } 
// }
// addbefore(5)
// 1
//  1 2
//  1 2 3
//  1 2 3 5
//  1 2 3 5 8
//  1 2 3 5 8 13
//  1 2 3 5 8 13 21
//  1 2 3 5 8 13 21 34
//  1 2 3 5 8 13 21 34 55
//  1 2 3 5 8 13 21 34 55 89



function numberorder(n){
  for(var i=0;i<=n;i++){
    var str=""
    for(var j=i;j<n;j++){
      str=str+(" ")+(" ")
    }
    for(var k=i;k>0;k--){
          str=str+(k)+(" ")
    }

    for(var k=0;k<=i;k++){
          str=str+(k)+(" ")
    }
    console.log(str)
  }

}
numberorder(8)
//                 0
//               1 0 1
//             2 1 0 1 2
//           3 2 1 0 1 2 3
//         4 3 2 1 0 1 2 3 4
//       5 4 3 2 1 0 1 2 3 4 5
//     6 5 4 3 2 1 0 1 2 3 4 5 6
//   7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
// 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8


*
//               * A *
//             * A * A *
//           * A * A * A *
//         * A * A * A * A *
//       * A * A * A * A * A *
//     * A * A * A * A * A * A *
//   * A * A * A * A * A * A * A *
// * A * A * A * A * A * A * A * A *
function astar(n){
  
  for(var i=1;i<=n;i++){
     var str=""
     for(var k=i;k<n;k++){
       str=str+("  ")
     }
     for(var j=1;j<=i;j++){
         str=str+("*")+(" ")
         if((j ==1 &&i!=1) || j !=i){
           str=str+("A")+(" ")
        }
     }
     console.log(str)
  }

}
astar(9)

// function primenumber(n){
//   for(let i=1;i<=n;i++){
//     var str=""
//   for(let k=1;k<i;k++){
//      str=str+("* ")
//   }
//   for(let j=1, k=n-i+1; j<=n-i+1 , k>=1 ;j++,k--){
//   str=str+(j)+(" ")+(k)+(" ")
//   }
//   for(let t=1;t<i;t++ ){
//     str=str+("* ")
//   }
// console.log(str)
//   }
// }
// primenumber(7)
// 1 7 2 6 3 5 4 4 5 3 6 2 7 1
// * 1 6 2 5 3 4 4 3 5 2 6 1 *
// * * 1 5 2 4 3 3 4 2 5 1 * *
// * * * 1 4 2 3 3 2 4 1 * * *
// * * * * 1 3 2 2 3 1 * * * *
// * * * * * 1 2 2 1 * * * * *
// * * * * * * 1 1 * * * * * *
