const convertToCelsius = function(farenheit) {
  //f to c
  let C =  ((farenheit - 32) * (5 / 9));
  C = Math.round(C * 10) / 10;

  return C;
};

const convertToFahrenheit = function(celsius) {
  //c to f
  let F = ((celsius * (9/5)) + 32);
  F = Math.round(F * 10) / 10;

  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
