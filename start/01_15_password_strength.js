// Write your code here
function checkPasswordStrength(password) {
  let messages = [];

  // at least one lowercase letter
  // at least one upper case letter
  // exactly one digit
  // exactly one special char
  // at least 8 chars long

  const lowerCasesRegEx = /[a-z]/g;
  const lowerCaseCount = (password.match(lowerCasesRegEx) ?? '').length;

  const upperCasesRegEx = /[A-Z]/g;
  const upperCaseCount = (password.match(upperCasesRegEx) ?? '').length;

  const digitRegex = /[0-9]/g;
  const digitCount = (password.match(digitRegex) ?? '').length;

  const specialCharRegex = /[!@£#$%^&*()]/g;
  const specialCharCount = (password.match(specialCharRegex) ?? '').length;

  if (lowerCaseCount < 1)
    messages.push("password must contain at least 1 lowercase letter");
  if (upperCaseCount < 1)
    messages.push("password must contain at least 1 uppercase letter");
  if (digitCount !== 1) messages.push("password must contain 1 digit");
  if (specialCharCount !== 1)
    messages.push("password must contain 1 special character");
  if (password.length < 8) messages.push("password must be at least 8 characters");

  const isPasswordOK = messages.length === 0;
  return [isPasswordOK, ...messages];
}

const strongPassword = "Pa$sWo0rd";
const [ok, ...messages] = checkPasswordStrength(strongPassword);

console.log(ok ? "password is strong" : "password is weak");
for (const msg of messages) {
  console.log(msg);
}
