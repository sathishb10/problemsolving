function isIsogram(text) {
    // add each char to a set
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    // check length of text and the size of the set 
    
     if (text.isEmpty) {
      return true;
    } 
    else {
      text = text.toLowerCase();
    }
  
  var array=text.split('')
   var sortedArr = array.sort();
  for(var i=0;i<array.length;i++){
    if(array[i]===array[i+1]){
      return false;
    }
  }
  return true;
  }
  
  var output = isIsogram('word');
  console.log(output);
  var output = isIsogram('KITTen');
  console.log(output);
  var output = isIsogram('');
  console.log(output);