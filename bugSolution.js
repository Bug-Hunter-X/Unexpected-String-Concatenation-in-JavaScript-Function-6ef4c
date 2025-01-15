function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle non-numeric input appropriately
  }
  return a + b;
}

function bar(c, d) {
  return foo(c, d) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar("2", 3)); // Output: 10
console.log(bar("abc", 3)); //Output: 0