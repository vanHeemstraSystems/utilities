var vowels = {a: true, e: true, i: true, o: true, u: true};

function strictType(prefix, expected) {
  if ((expected.length > 0) && (vowels[expected[0]])) {
    throw new Errors.ValidationError('Value for ' + prefix +
' must be an ' + expected + '.')
  }
  throw new Errors.ValidationError('Value for ' + prefix +
' must be a ' + expected + '.')
}

module.exports = strictType;