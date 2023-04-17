const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString().split('');

  let max = -Infinity;

  for (let i = 0; i < numStr.length; i++) {
    const a = [...numStr];

    a.splice(i, 1);

    const b = +a.join('')

    if (b > max) {
      max = b;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
