const { NotImplementedError } = require('../extensions/index.js');

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
  const a = {};

  for(const letter of str) {
    if(!a[letter]) {
      a[letter] = 1;
    } else {
      a[letter]++;
    }
  }
  let res = '';
  for(const [k, v] of Object.entries(a)) {
    res += v+k;
  }
  return res;
}

module.exports = {
  encodeLine
};
