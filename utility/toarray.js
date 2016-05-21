/*
 * File: toarray.js
 */
function toArray(args) {
  return Array.prototype.slice.call(args);
}

module.exports = toArray;