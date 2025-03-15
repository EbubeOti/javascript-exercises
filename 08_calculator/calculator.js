const add = function(...args) {
	let accumulator = 0;
  for (const n of args) {
    accumulator += n;
  }
  return accumulator;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(myArray) {
  let accumulator = 0;
  if (myArray.length === 0) {
    // do nothing
  } else {
    for (const n of myArray) {
      accumulator += n;
    }
  }
  return accumulator;
};

const multiply = function(myArray) {
  let accumulator = 1;
  if (myArray.length === 0) {
    // do nothing
  } else {
    for (const n of myArray) {
      accumulator *= n;
    }
  }
  return accumulator;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  let acc = 1;
	for (i=1;i<=n;i++){
    acc *= i;
  }
  return acc;
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
