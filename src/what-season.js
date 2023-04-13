const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (
      !(date instanceof Date) ||
      Object.getOwnPropertyNames(date).length
  ) {
    throw new Error('Invalid date!');
  }

  const m = date.getMonth();

  return m >= 2 && m < 5 ? 'spring' :
         m >= 5 && m < 8 ? 'summer' :
         m >= 8 && m < 11 ? 'autumn' : 'winter';
}

module.exports = {
  getSeason
};
