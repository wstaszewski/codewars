// return masked string
function maskify(cc) {

  let maskedStr = '';
  for (var i = 0; i < cc.length - 4; i++) {
    maskedStr += '#';
  }
  
  maskedStr += cc.substring(cc.length-4,cc.length);
  return maskedStr;
}