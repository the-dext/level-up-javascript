let x = 10;
let y = 5;

console.log("Before swap: x = " + x + ", y = " + y);

// Code to swap 'x' (1010)
// and 'y' (0101)

// x now becomes 15 (1111)
x = x ^ y;

// y becomes 10 (1010)
y = x ^ y;

// x becomes 5 (0101)
x = x ^ y;

console.log("After swap: x = " + x + ", y = " + y);
