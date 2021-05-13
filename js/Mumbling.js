function accum(s) {
  let result = '';
  for (var i = 0; i < s.length; i++) {
      for(var ii = 0; ii <= i; ii++) {
        if(ii == 0)
          result += s.charAt(i).toUpperCase();
        else
          result += s.charAt(i).toLowerCase();
      }
    result += '-';
  }
  return result.slice(0, -1);
}