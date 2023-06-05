/**
 * Checks whether given string is a palindrome or not.
 * @param {string} checkString - string to check
 * @return {boolean} - true if given string is a palindrome, false otherwise
 */
const palindromes = function (checkString) {
    let stringToCheck = checkString.split('');
    stringToCheck = stringToCheck.reverse();
    stringToCheck = stringToCheck.join('');
    
    
    stringToCheck = stringToCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    initialString = checkString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");

    return initialString.toUpperCase() === stringToCheck.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
