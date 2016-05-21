/*
 * Filename: deepcopy.js
 * Make a "deep copy".
 * The prototype chain is not copied.
 */
function deepCopy(value) {
  var result;
  if (value instanceof Buffer) {
    // The isPlainObject(buffer) returns true.
    return new Buffer(value);
  }
  if (isPlainObject(value) === true) {
    result = {};
    loopKeys(value, function(_value, key) {
      if (_value.hasOwnProperty(key)) {
        result[key] = deepCopy(_value[key]);
      }
    });
    return result;
  }
  if (Array.isArray(value)) {
    result = []
    for (var i = 0; i < value.length; i++) {
      result.push(deepCopy(value[i]));
    }
    return result;
  }
  return value;
}

module.exports = deepCopy;