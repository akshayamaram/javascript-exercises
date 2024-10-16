const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	if(arr.length === 0) return 0;
	if(arr.length === 1) return arr[0];
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1
  for(let i=0; i<arr.length; i++) {
    product = product * arr[i]
  }
  return product
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
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
