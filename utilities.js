/*
 * utilities.js
 */
var UtilitiesUtility = require(__dirname+'/utility.js');

/**
 * Create a new Utilities that let users create sub-utilities.
 * @return {Utilities}
 */
function Utilities() { }

/**
 * Create a new UtilitiesUtility object.
 * @return {UtilitiesUtility}
 */
Utilities.prototype.utility = function() {
  return new UtilitiesUtility();
}

module.exports = Utilities;
