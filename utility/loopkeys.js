/*
 * File: loopkeys.js
 * Create a new Utility that let users create sub-utilities.
 * @return {Utility}
 */
function loopKeys(obj, fn) {
  // ORIGINAL if (self._isPlainObject(obj)) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    var keys = Object.keys(obj);
    var result;
    for (var i = 0; i < keys.length; i++) {
      result = fn(obj, keys[i]);
      if (result === false) { return };
    }
  }
}

module.exports = loopKeys;