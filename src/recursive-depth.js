const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const depths = [1];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depths.push(recursive(arr[i]));
      }
    }

    function recursive (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          return 1 + recursive(arr[i]);
        }
      }
      return 2;
    }

    return Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
