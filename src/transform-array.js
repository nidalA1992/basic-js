const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];

  for (let i = 0, k = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
      res[k++] = null;
      i++;
      continue;
    } else if (arr[i] === '--discard-prev') {
      k > 0 && res[k - 1] ? k-- : k;
      continue;
    } else if (arr[i] === '--double-next') {
      arr[i + 1] ? res[k++] = res[k] = arr[i + 1] : null;
      continue;
    } else if (arr[i] === '--double-prev') {
      arr[i - 1] && res[k - 1] ? res[k++] = res[k] = arr[i - 1] : null;
      continue;
    }

    res[k++] = arr[i];
  }

  return res.filter(item => item);
}

module.exports = {
  transform
};
