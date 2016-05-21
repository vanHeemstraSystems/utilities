/*
 * File: isplainobject.js
 * Is `obj` a plain object.
 * @return {boolean}
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

module.exports = isPlainObject;