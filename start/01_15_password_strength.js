// Write your code here
function checkPasswordStrength(password) {
  let messages = [];

  // at least 8 chars long

  // at least one lowercase letter
  const lowerCasesRegEx = /[a-z]/g;
  const lowerCaseCount = lowerCasesRegEx.test(password);

  // at least one upper case letter
  const upperCasesRegEx = /[A-Z]/g;
  const upperCaseCount = upperCasesRegEx.test(password);

  // exactly one digit
  const digitRegex = /[0-9]/g;
  const digitCount = (password.match(digitRegex) ?? "").length == 1;

  // exactly one special char
  const specialCharRegex = /[!@£#$%^&*()]/g;
  const specialCharCount = (password.match(specialCharRegex) ?? "").length == 1;

  if (!lowerCaseCount) {
    messages.push("password must contain at least 1 lowercase letter");
  }
  if (!upperCaseCount) {
    messages.push("password must contain at least 1 uppercase letter");
  }
  if (!digitCount) {
    messages.push("password must contain 1 digit");
  }
  if (!specialCharCount) {
    messages.push("password must contain 1 special character");
  }
  if (password.length < 8) {
    messages.push("password must be at least 8 characters");
  }

  const isPasswordOK = messages.length === 0;
  return [isPasswordOK, ...messages];
}

const strongPassword = "Pa$sWo0rd";
const badPassword = "BAD";
const [ok, ...messages] = checkPasswordStrength(strongPassword);

console.log(ok ? "password is strong" : "password is weak");
for (const msg of messages) {
  console.log(msg);
}
