/*
 * index.js
 */
var UtilityRoot = require(__dirname+'/root.js');

/**
 * Create a new Utility that let users create sub-utilities.
 * @return {Utility}
 */
function Utility() { }

/**
 * Create a new UtilityRoot object.
 * @return {UtilityRoot}
 */
Utility.prototype.root = function() {
  return new UtilityRoot();
}

/**
 * Check if the first argument is a UtilityRoot object or not
 * @param {Object} obj The object to check against UtilityRoot.
 * @return {boolean}
 */
Utility.prototype.isRoot = function(obj) {
  return obj instanceof UtilityRoot;
}

module.exports = new Utility();
