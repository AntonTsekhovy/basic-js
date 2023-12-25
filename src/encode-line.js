const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let char;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (str[i] === str[i + 1]) {
      count++;
      console.log(count);
    } else {
      count > 1 ? arr.push(count + char) : arr.push(char);
      count = 1;
    }
  }
  return arr.join("");
}

module.exports = {
  encodeLine,
};
