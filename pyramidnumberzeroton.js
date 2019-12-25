                0
              1 0 1
            2 1 0 1 2
          3 2 1 0 1 2 3
        4 3 2 1 0 1 2 3 4
      5 4 3 2 1 0 1 2 3 4 5
    6 5 4 3 2 1 0 1 2 3 4 5 6
  7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8


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
              