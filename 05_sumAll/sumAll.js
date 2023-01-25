const sumAll = function(a, b) {
    let firstNum, secondNum, sum = 0 ;

    if (b < a) {
        firstNum = b;
        secondNum = a; 
    } else {
        firstNum = a;
        secondNum = b;
    } 

    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return "ERROR";
    }

    for (let i = firstNum; i <= secondNum; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
