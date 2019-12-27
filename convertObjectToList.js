function convertObjectToList(obj) {
    // your code here
    var newarr=[]
   
    for(key in obj){
       var arr=[]
       arr.push(key)
     arr.push(obj[key])
     newarr.push(arr);
    }
  return newarr;
  }
  var obj={
    name: 'Holly',
    age: 35,
    role: 'producer'
  }
  
  var output=convertObjectToList(obj);
  console.log(output);