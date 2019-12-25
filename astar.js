*
* A *
* A * A *
* A * A * A *
* A * A * A * A *
* A * A * A * A * A *
* A * A * A * A * A * A *
* A * A * A * A * A * A * A *
* A * A * A * A * A * A * A * A *
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