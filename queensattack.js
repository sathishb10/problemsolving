
var arr=[]
function matrix(n,x,y){
    for(var i=0;i<n;i++){
  var str=[]
    for(var j=0;j<n;j++){
             if( i==x && j==y){
                 str.push("k")
             }
             else{
                 str.push("0")               
             }
    }
arr.push(str)
}
// return arr;
}
var arrr2= []
var arrr3= []


function upper(n,x,y,aarr){
    str=[];
   i=x-1;
   while(i>=0 ){
     for(var j=0;j<aarr.length;j++){
       if(aarr[j][0]==i && aarr[j][1]==y){
         arr[i][y] = "p"
        
         return str
       }else{
         arr[i][y]="."
       }
     }
    str.push([i,y])
    i-=1
  }
   return str;
}

function lower(n,x,y,aarr){

    str=[];
    i=x+1;
    while(i<n){
      for(var j=0;j<aarr.length;j++){
        if(aarr[j][0]==i && aarr[j][1]==y){
          arr[i][y]="p"
          return str;
        }
        else{
          arr[i][y]="."
        }
      }
        str.push([i,y])
        i+=1;
    }
    return str;    
}

function left(n,x,y,aarr){
    str=[];
    i=y-1;
    while(i>=0){
      for(var j=0;j<aarr.length;j++){
        if(aarr[j][0]==x && aarr[j][1]==i){
          arr[x][i]="p"
          return str;
        }
        else{
          arr[x][i]="."
        }
      }
str.push([x,i])
i-=1;
    }
return str;
}
function right(n,x,y,aarr){
  str=[];
    j=y+1;
    while(j<n){
      for(var k=0;k<aarr.length;k++){
        if((aarr[k][0])==x && aarr[k][1]==j){
          arr[x][j]="p"
          return str;
        }
        else{
          arr[x][j]="."
        }
      }
    str.push([x,j])
    j+=1
    }
return str
}
function diagonalleftUpper(n,x,y,aarr){
  var  str=[]
    i=x-1;
    j=y-1;
    while(i>=0&&j>=0){
      for(var k=0;k<aarr.length;k++){
        if(aarr[k][0]==i && aarr[k][1]==j){
               arr[i][j]="p"
               return str;
        }
        else{
          arr[i][j]="."
        }
      }
        str.push([i,j])
        i -=1;
        j -=1;
    }
   return str;
}
function diagonalrightUpper(n,x,y){
  var  str=[]
    i=x-1;
    j=y+1;
    while(i>=0&&j<n){
        arr[i][j]="."
        str.push([i,j])

i-=1;
j+=1
    }
   return str;

}
function diagonalleftlower(n,x,y){
  var  str=[]
    i=x+1;
    j=y-1;
    while(i<n&&j>=0){
        arr[i][j]="."
        str.push([i,j])
    i+=1;
    j-=1
    }
   return str;

}
function diagonalrightlower(n,x,y){
  var  str=[]
    i=x+1;
    j=y+1;
    while(i<n&&j<n){

        arr[i][j]="."
        str.push([i,j])
        i+=1;
        j  +=1;
    }
   return str;
}

function kingmoves(n,x,y,aarr){
  console.log(matrix(n,x,y))
  console.log(upper(n,x,y,aarr))
  console.log(lower(n,x,y,aarr))
  console.log(left(n,x,y,aarr))
  console.log(right(n,x,y,aarr))
  console.log(diagonalleftUpper(n,x,y,aarr))
  console.log(diagonalrightUpper(n,x,y))
  console.log(diagonalleftlower(n,x,y))
  console.log(diagonalrightlower(n,x,y))
  console.log(arr);
}
kingmoves(8,4,4,[ [ 5, 5 ],[4,2] ,[5,2],[2,2],[ 2, 6 ], [ 5, 4 ] ])

//5 3 4 3 [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]

// arr[0][0] arr[1][0] ,arr[2][0]
//arr[0][1] arr[1][1]. arr[2][1]





