/*
 * Filename: extrafield.js
 */
function extraField(prefix, key) {
  if (prefix === '') {
    throw new Errors.ValidationError('Extra field `' + key +
'` not allowed.')
  }
  throw new Errors.ValidationError('Extra field `' + key +
'` in ' + prefix + ' not allowed.')
}

module.exports = extraField;