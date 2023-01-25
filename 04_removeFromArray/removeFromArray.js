const removeFromArray = function(array, ...args) {
    let newArray = array.filter(a => !args.includes(a));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
