decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(decWord).join(' ');
}

const decLetter = (letter) => {
  return MORSE_CODE[letter];
}

const decWord = (word) => {
  return word.split(' ').map(decLetter).join('');
}