// Return true if doc is undefined, else false
function validateIfUndefined(value, prefix, type, options) {
  if (value === undefined) {
    if (options.enforce_missing === true) {
      undefinedField(prefix);
    }
    return true;
  }
  return false;
}