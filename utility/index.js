/*
 * index.js
 */
var UtilityIsPlainObject = require(__dirname+'/isplainobject.js');
var UtilityDeepCopy = require(__dirname+'/deepcopy.js');
var UtilityTryCatch = require(__dirname+'/trycatch.js');
var UtilityHook = require(__dirname+'/hook.js');
var UtilityLoopKeys = require(__dirname+'/loopkeys.js');
var UtilityChangeProto = require(__dirname+'/changeproto.js');

var UtilityToArray = require(__dirname+'/toarray.js');

/**
 * Create a new Utility that let users create sub-utilities.
 * @return {Utility}
 */
function Utility() { }

/**
 * Create a new UtilityIsPlainObject object.
 * @return {UtilityIsPlainObject}
 */
Utility.prototype.isPlainObject = function() {
  return new UtilityIsPlainObject();
}

/**
 * Create a new UtilityDeepCopy object.
 * @return {UtilityDeepCopy}
 */
Utility.prototype.deepCopy = function() {
  return new UtilityDeepCopy();
}

/**
 * Create a new UtilityTryCatch object.
 * @return {UtilityTryCatch}
 */
Utility.prototype.tryCatch = function() {
  return new UtilityTryCatch();
}

/**
 * Create a new UtilityHook object.
 * @return {UtilityHook}
 */
Utility.prototype.hook = function() {
  return new UtilityHook();
}

/**
 * Create a new UtilityLoopKeys object.
 * @return {UtilityLoopKeys}
 */
Utility.prototype.loopKeys = function() {
  return new UtilityLoopKeys();
}

/**
 * Create a new UtilityChangeProto object.
 * @return {UtilityChangeProto}
 */
Utility.prototype.changeProto = function() {
  return new UtilityChangeProto();
}




/**
 * Create a new UtilityToArray object.
 * @return {UtilityToArray}
 */
Utility.prototype.toArray = function() {
  return new UtilityToArray();
}

module.exports = new Utility();
