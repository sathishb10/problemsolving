function detectOutlierValue(string){
    var newarr=[];
    var evenArr=[];
    var oddArr=[];
    outlier=0
    newarr=string.split(' ')
  for(var i=0;i<newarr.length;i++){
    if(newarr[i]%2==0){
      
      evenArr.push(newarr[i])
    }
    else{
      oddArr.push(newarr[i])
    }
  }
  if(evenArr.length<oddArr.length){
     outlier=newarr.indexOf(evenArr[0])
  }
  else{
     outlier=newarr.indexOf(oddArr[0])
  }
  return outlier+1
  }
  detectOutlierValue("2 4 7 8 10");