/*
 * File: loosetype.js
 */
function looseType(prefix, expected) {
  if ((expected.length > 0) && (vowels[expected[0]])) {
    throw new Errors.ValidationError('Value for ' + prefix +
' must be an ' + expected + ' or null.')
  }
  throw new Errors.ValidationError('Value for ' + prefix +
' must be a ' + expected + ' or null.')
}

module.exports = looseType;