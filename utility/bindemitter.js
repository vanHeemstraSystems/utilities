//var EventEmitter = require('events').EventEmitter;

var self = this; // set the context locally, for access protection

/**
 * Create a new BindEmitter that let users create sub-bindemitter.
 * @return {BindEmitter}
 */
function BindEmitter() {
  self._eventEmitter = {};
  self._utility = {};
}

BindEmitter.prototype.eventemitter = function() {
  return self._eventEmitter;
}

BindEmitter.prototype.seteventemitter = function(fnOrValue) {
  self._eventEmitter = fnOrValue;
}

BindEmitter.prototype.utility = function() {
  return self._utility;
}

BindEmitter.prototype.setutility = function(fnOrValue) {
  self._utility = fnOrValue;
}

BindEmitter.prototype.bindemitter = function(self) {
  //ORIGINAL util.loopKeys(EventEmitter.prototype, function(emitter, key) {
  self.utility().loopKeys(self.eventemitter().prototype, function(emitter, key) { 
    var fn = emitter[key];
    if (typeof fn === 'function') {
      self[key] = function() {
        var args = new Array(arguments.length);
        for(var i = 0; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        fn.apply(self, args);
      }
    }
  });
}

module.exports = BindEmitter;

// REMOVE ALL BELOW

// function bindEmitter(self) {
//   util.loopKeys(EventEmitter.prototype, function(emitter, key) {
//     var fn = emitter[key];
//     if (typeof fn === 'function') {
//       self[key] = function() {
//         var args = new Array(arguments.length);
//         for(var i = 0; i < arguments.length; i++) {
//           args[i] = arguments[i];
//         }
//         fn.apply(self, args);
//       }
//     }
//   });
// }