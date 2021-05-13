const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

function isPangram(string){
    string = string.toLowerCase();
    return alphabet.every(x => string.includes(x));
}