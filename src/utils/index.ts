import CONST from '../CONST';

function isValidEmail(email: string) {
  return CONST.REGEX.EMAIL.test(email);
}
function isValidUpperCasePassword(password: string) {
  return CONST.REGEX.UPPERCASE.test(password);
}
function isValidLowerCasePassword(password: string) {
  return CONST.REGEX.LOWERCASE.test(password);
}
function isValidDigitsCasePassword(password: string) {
  return CONST.REGEX.DIGITS.test(password);
}
function isValidSpecialCharPassword(password: string) {
  return CONST.REGEX.SPECIALCHAR.test(password);
}

export {
  isValidEmail,
  isValidUpperCasePassword,
  isValidLowerCasePassword,
  isValidDigitsCasePassword,
  isValidSpecialCharPassword,
};
