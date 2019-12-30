var arr=[]
function matrix(n,x,y){
    for(var i=0;i<n;i++){
        var str=[];
        for(var j=0;j<n;j++){
             if(i==x&&j==y){
                 str.push("R")
             }
             else{
                 str.push("0")
             }
        }
        arr.push(str);
    }
}

function upper(n,x,y){
var str=[]
    i=x-1;
    j=y
    while(i>=0){
        arr[i][j]="."
        str.push([i,j])
     i -=1
    }
    return str;
}

function lower(n,x,y){
    var str=[];
    i=x+1;
    j=y;
    while(i<n){
        arr[i][j]="."
        str.push([i,j])
        i +=1;
      
    }
    return str;
}

function left(n,x,y){
    var str=[];
    i=x
    j=y-1;
    while( j>=0){
        arr[i][j]="."
        str.push([i,j])
     
        j -=1;
    }
    return str;    
}


function right(n,x,y){
    var str=[];
    i=x
    j=y+1;
    while(j<n){
        arr[i][j]="."
        str.push([i,j])
      
        j +=1;
    }
    return str;    
}




function rookpmoves(n,x,y){
console.log(matrix(n,x,y));
console.log(upper(n,x,y))
console.log(lower(n,x,y))
console.log(left(n,x,y))
console.log(right(n,x,y))
console.log(arr)

}
rookmoves(8,4,4)


// undefined
// [ [ 3, 4 ], [ 2, 4 ], [ 1, 4 ], [ 0, 4 ] ]
// [ [ 5, 4 ], [ 6, 4 ], [ 7, 4 ] ]
// [ [ 4, 3 ], [ 4, 2 ], [ 4, 1 ], [ 4, 0 ] ]
// [ [ 4, 5 ], [ 4, 6 ], [ 4, 7 ] ]
// [ [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '.', '.', '.', '.', 'R', '.', '.', '.' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '.', '0', '0', '0' ] ]