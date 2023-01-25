const reverseString = function(string) {
    let newString = '';
    let length = string.length;
    for (let i = length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
