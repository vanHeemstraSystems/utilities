/*
 * File: recurse.js
 */
var Utility = require(__dirname + '/index.js');

function recurse(key, joins, modelTo, all, done) {
  return (Utility.isPlainObject(modelTo) && modelTo.hasOwnProperty(key))
    || ((all === true) && (done[joins[key].model.getTableName()] !== true))
}

module.exports = recurse;