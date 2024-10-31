const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
};

const multiply = function (arr) {
  let product = 1;
  for (const num of arr) {
    product *= num;
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  total = 1;

  if (num == 0) {
    return 1;
  }

  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
