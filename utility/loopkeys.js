/*
 * File: loopkeys.js
 */
var Utility = require(__dirname + '/index.js');

function loopKeys(obj, fn) {
  console.log('utilities utility inside loopKeys()') // FOR TESTING ONLY
  if (Utility.isPlainObject(obj)) {
    var keys = Object.keys(obj);
    var result;
    for (var i = 0; i < keys.length; i++) {
      result = fn(obj, keys[i]);
      if (result === false) { return };
    }
  }
}

module.exports = loopKeys;