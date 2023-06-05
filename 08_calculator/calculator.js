//Use rest operator for multiple arguments
//place them into an array using spread operator 

const add = function(...numbers) {
  let result = 0;
                  //this is the spread operator
  let addArray = [...numbers];

  for (const num of addArray) {
    result += num;
  }

  return result;
};

const subtract = function(...numbers) {
  let result = numbers[0];
  result = result - numbers[1];

  return result;
};

const sum = function(...numbers) {
  let result = 0;
  //pop() is used to populate the array from argument
  const sumArray = numbers.pop();

  for (const num of sumArray) {
    result += num;
  }
  return result;
};

const multiply = function(...numbers) {
  let result = 1;
  //pop() is used to populate the array from argument
  const multArray = numbers.pop();

  for (const num of multArray) {
    result *= num;
  }
  return result;
};


const power = function(...numbers) {
  let result = numbers[0] ** numbers[1];
  return result;
};

const factorial = function(x) {
  //factorial: 5 x 4 x 3 x 2 x 1

  if (x === 0) {
    return 1;
  } else {
    return  x * factorial(x - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
