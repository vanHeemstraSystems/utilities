/*
 * utilities.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function() {
  console.log('utilities - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths'); 
  var promise = require(path.join(paths.libraries, '/promise.js'));
  var _utility = require(__dirname+'/utility.js');
  var join = promise.join;
  return new promise(function(resolve) {
    join(_utility(), function(utility) {
      _Me.utility = utility;
    }); // eof join
    console.log('utilities - resolve(_Me): ', _Me);
    resolve(_Me);
  }) // eof promise
  .catch(function(error) {
    console.log('utilities - error: ', error);
  }) // eof catch
  .finally(function() {
    console.log('utilities - finally');
  }); // eof finally
} // eof module