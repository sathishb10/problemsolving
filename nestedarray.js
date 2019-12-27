function transformEmployeeData(array) {
    // your code here
    
    // array.map((obj)=>{
      
    // })
  //   var arr=[]
      
  //   for(var i=0;i<array.length;i++){
  //     var obj={}
  //     for(var j=0;j<array[i].length;j++){
    
  //         obj[array[i][j][0]]=array[i][j][1];
     
  //     }
  //   arr.push(obj)
  //   }
   
  // return arr;
  var obj={}
  var arr=[];
  for(var i=0;i<array.length;i++){
    var person=array[i]
    for(var j=0;j<person.length;j++){
      var characteristics=person[j]
     for(var k=0;k<characteristics.length;k++){
      var charcter=characteristics[k];
       if(obj[charcter]===undefined && k===0){
       obj[charcter]=characteristics[k+1]
       }
     }
    }
       arr.push(obj);
      obj = {};
  }
  
   return arr; 
    
  }
  
  var output=transformEmployeeData([
      [
          ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
          ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
  ])
  console.log(output)