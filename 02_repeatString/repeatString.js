const repeatString = function(string, num) {
    let hey = string;

    if (num === 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    }
    
    for (let i = 1; i < num; i++){
        hey += string;
    }
    return hey
};

// Do not edit below this line
module.exports = repeatString;
