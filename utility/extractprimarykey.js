function extractPrimaryKey(oldValue, newValue, primaryKey) {
  var primaryKey;
  if (oldValue !== null) {
    return oldValue[primaryKey];
  }
  if (newValue !== null) {
    return newValue[primaryKey];
  }
  return undefined;
}