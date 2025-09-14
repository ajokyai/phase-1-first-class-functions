// 1) receivesAFunction: takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2) returnsANamedFunction: returns a named function
function returnsANamedFunction() {
  function namedFn() {
    return "Hello from a named function!";
  }
  return namedFn;
}

// 3) returnsAnAnonymousFunction: returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    return "Hello from an anonymous function!";
  };
}

// Export functions so the tests can find them
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
