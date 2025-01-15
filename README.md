# Unexpected String Concatenation in JavaScript Function

This repository demonstrates a common JavaScript error: unexpected string concatenation when numerical operations are expected.

The `foo` function is designed to add two numbers. However, it unexpectedly performs string concatenation if one of the inputs is a string.  The `bar` function uses `foo`, and the error becomes apparent when a string is passed.

## Bug

The `bug.js` file contains the code exhibiting this issue. When `bar` receives a string and a number, the result is unexpected due to the implicit type coercion in JavaScript.

## Solution

The `bugSolution.js` file provides a corrected version of the code.  The solution involves explicit type checking using `typeof` or `Number()` to ensure both inputs to `foo` are numbers before performing the addition.  This prevents unexpected string concatenation.