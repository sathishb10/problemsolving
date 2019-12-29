

// function migratoryBirds(arr){
// let array=new Array(arr.length).fill(0)

// for(var i=0;i<arr.length;i++){
//   array[arr[i]]=1
// }
// console.log(array)
// return array.indexOf(array.reduce((a,b)=>Math.max(a,b)))
// }
//  migratoryBirds([1 ,2  ,4 ,5, 4, 2, 1 ,3, 4])

// -------------------------------------------------------------


// function gradingStudents(grades) {
// var index=[0]
// while(index<grades.length)
// {
// if (parseInt(grades[index])%5>=3&& grades[index]>37)
// {
// grades[index]=grades[index]-parseInt(grades[index])%5+5;

 
// }
// index ++;

// }
// return grades;

// }
// var grades=[4,73,67,38,33]
// gradingStudents(grades)



// Two kangaroo meet at atime.
//  function kangaroo(x1, v1, x2, v2) {
 
//     if (v2 > v1 || v2 == v1) {


//   return "NO";
// } else {
//      if((x1 - x2) % (v2 - v1) == 0) {
//       return "YES";
//     } 
//     else {
//    return "NO";
//     }
// }

// }
//  kangaroo(0, 3, 4, 2);

 
function getTotalX(a, b) {
    var count=0
    for(var i=0;i<=100;i++){

     if(a.every(kk=>(i%kk==0))){
      if(b.every(bb=>(bb%i==0))){
      
    count++
      }
     }
    }
    return count
}
getTotalX([2,4],[16,32,96])