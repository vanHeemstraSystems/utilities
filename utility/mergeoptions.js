/*
 * File: mergeoptions.js
 */
var Utility = require(__dirname + '/index.js');

function mergeOptions(options, newOptions) {
  if (Utility.isPlainObject(newOptions)) {
    if (!options) {
      options = {};
    }
    var localOptions = {};
    localOptions.enforce_missing = (newOptions.enforce_missing != null) ? newOptions.enforce_missing : options.enforce_missing;
    localOptions.enforce_type = (newOptions.enforce_type != null) ? newOptions.enforce_type : options.enforce_type;
    localOptions.enforce_extra = (newOptions.enforce_extra != null) ? newOptions.enforce_extra : options.enforce_extra;
    return localOptions;
  }
  return options;
}

module.exports = mergeOptions;