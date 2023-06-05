/**
 * A function that returns the fibonacci number at a certain index
 * @param {fibIndex} - index of the fibonacci number
 * @return {fibNum} - the fibonacci number at the index / argument 
 */
const fibonacci = function(fibIndex) {
    let fibNum = 0, nextNum = 1, result = 0;
    let index = parseInt(fibIndex);

    if (index < 0) {
        return "OOPS";
    } else if (index === 1){
        return 1;
    }

    for (let i = 0; i < fibIndex - 1; i++) {
        result  = fibNum + nextNum;
        fibNum = nextNum;
        nextNum = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
