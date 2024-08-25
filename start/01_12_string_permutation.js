// Write your code here

function calcPermutations(stringInput) {
  // factorial is n * n-1 * n-2...   where n is string length
  let length =
    typeof stringInput === "string" ? stringInput.length : stringInput;

  if (length === 1) {
    return 1;
  } else {
    return length * calcPermutations(length - 1);
  }
}

// tests
const stringInput = "123";
// 3 * 2 * 1 = 6
const result = calcPermutations(stringInput);
console.log(result === 6 ? "passed" : `failed, result: ${result}`);
