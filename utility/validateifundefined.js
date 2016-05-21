

var Utility = require(__dirname + '/index.js');

// Return true if doc is undefined, else false
function validateIfUndefined(value, prefix, type, options) {
  if (value === undefined) {
    if (options.enforce_missing === true) {
      Utility.undefinedField(prefix);
    }
    return true;
  }
  return false;
}

module.exports = validateIfUndefined;