// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let isNegative = false;
    let result;
    let str = n.toString();
    
    if(str[0] === "-") {
        isNegative = true;
        str.slice(1);
    }
    
    result = parseInt(str.split('').reverse().join(''));
    
    return isNegative ? result * -1 : result;
}
module.exports = reverseInt;
