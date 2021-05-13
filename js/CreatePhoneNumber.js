function createPhoneNumber(numbers){
  var phoneNumber = "(xxx) xxx-xxxx";
  for (var i=0; i<numbers.length; i++){
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  }
  
  return phoneNumber;
}