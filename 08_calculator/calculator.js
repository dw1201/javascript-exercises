const add = function(num1, num2) {
  const aTotal = num1 + num2;
  return (aTotal);
};

const subtract = function(num1, num2) {
const total = num1 - num2;
return (total);
};

const sum = function(val) {
  let total = 0;
  for (i = 0; i < val.length; i++ ) {
    total += (val[i]);
  }
  return (total);
};

const multiply = function(val) {
  let total = 1;
  for (i = 0; i < val.length; i++) {
    total *= val[i];
  }
  return (total);
};

const power = function(a, b) {
	let total = Math.pow(a, b);
  return (total);
};

const factorial = function(a) {
  if (a < 0) {
    return -1;
  } else if (a == 0) {
    return 1;
  } else {
    return (a * factorial(a - 1));
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
