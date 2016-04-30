/*
 * index.js
 */
var UtilityIsPlainObject = require(__dirname+'/isplainobject.js');
var UtilityDeepCopy = require(__dirname+'/deepcopy.js');
var UtilityTryCatch = require(__dirname+'/trycatch.js');
var UtilityHook = require(__dirname+'/hook.js');
var UtilityLoopKeys = require(__dirname+'/loopkeys.js');
var UtilityChangeProto = require(__dirname+'/changeproto.js');
var UtilityRecurse = require(__dirname+'/recurse.js');
var UtilityBindEmitter = require(__dirname+'/bindemitter.js');
var UtilityMergeOptions = require(__dirname+'/mergeoptions.js');
var UtilityExtractPrimaryKey = require(__dirname+'/extractprimarykey.js');
var UtilityUndefinedField = require(__dirname+'/undefinedfield.js');
var UtilityStrictType = require(__dirname+'/stricttype.js');
var UtilityExtraField = require(__dirname+'/extrafield.js');
var UtilityLooseType = require(__dirname+'/loosetype.js');
var UtilityPseudoTypeError = require(__dirname+'/pseudotypeerror.js');
var UtilityValidateIfUndefined = require(__dirname+'/validateifundefined.js');
var UtilityToArray = require(__dirname+'/toarray.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Utility that let users create sub-utilities.
 * @return {Utility}
 */
function Utility() { 
  self._event = {};  // will be set, before passing on to mapping
  self._promise = {};  // will be set, before passing on to mapping
}

Utility.prototype.event = function() {
  return self._event;
}

Utility.prototype.setevent = function(fnOrValue) {
  self._event = fnOrValue;
}

Utility.prototype.promise = function() {
  return self._promise;
}

Utility.prototype.setpromise = function(fnOrValue) {
  self._promise = fnOrValue;
}

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
  this._utilityHook = new UtilityHook();
  this._utilityHook.setpromise(self.promise());
  //return new UtilityHook();
  return this._utilityHook;
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
 * Create a new UtilityRecurse object.
 * @return {UtilityRecurse}
 */
Utility.prototype.recurse = function() {
  return new UtilityRecurse();
}

/**
 * Create a new UtilityBindEmitter object.
 * @return {UtilityBindEmitter}
 */
Utility.prototype.bindEmitter = function() {
  this._utilityBindEmitter = new UtilityBindEmitter();
  this._utilityBindEmitter.seteventemitter(self.event().eventemitter());
  this._utilityBindEmitter.setutility(self); // DOES THIS WORK?
  // return new UtilityBindEmitter();
  return this._utilityBindEmitter;
}

/**
 * Create a new UtilityMergeOptions object.
 * @return {UtilityMergeOptions}
 */
Utility.prototype.mergeOptions = function() {
  return new UtilityMergeOptions();
}

/**
 * Create a new UtilityExtractPrimaryKey object.
 * @return {UtilityExtractPrimaryKey}
 */
Utility.prototype.extractPrimaryKey = function() {
  return new UtilityExtractPrimaryKey();
}

/**
 * Create a new UtilityUndefinedField object.
 * @return {UtilityUndefinedField}
 */
Utility.prototype.undefinedField = function() {
  return new UtilityUndefinedField();
}

/**
 * Create a new UtilityStrictType object.
 * @return {UtilityStrictType}
 */
Utility.prototype.strictType = function() {
  return new UtilityStrictType();
}

/**
 * Create a new UtilityExtraField object.
 * @return {UtilityExtraField}
 */
Utility.prototype.extraField = function() {
  return new UtilityExtraField();
}

/**
 * Create a new UtilityLooseType object.
 * @return {UtilityLooseType}
 */
Utility.prototype.looseType = function() {
  return new UtilityLooseType();
}

/**
 * Create a new UtilityPseudoTypeError object.
 * @return {UtilityPseudoTypeError}
 */
Utility.prototype.pseudoTypeError = function() {
  return new UtilityPseudoTypeError();
}

/**
 * Create a new UtilityValidateIfUndefined object.
 * @return {UtilityValidateIfUndefined}
 */
Utility.prototype.validateIfUndefined = function() {
  return new UtilityValidateIfUndefined();
}

/**
 * Create a new UtilityToArray object.
 * @return {UtilityToArray}
 */
Utility.prototype.toArray = function() {
  return new UtilityToArray();
}

module.exports = new Utility();
