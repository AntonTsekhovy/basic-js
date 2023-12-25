const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = "|";

  const arr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(String(options.addition));
  }
  const res = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    res.push(str + arr.join(options.additionSeparator));
  }
  return res.join(options.separator);
}

module.exports = {
  repeater,
};
