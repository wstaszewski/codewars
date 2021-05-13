function duplicateCount(text){
  var freq = {};
    for (var i=0; i<text.length;i++) {
        var character = text.toLowerCase().charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
  
  let count = 0;
  for( let prop in freq ){
    if(freq[prop] > 1)
      count++;
}
  
  return count;
}