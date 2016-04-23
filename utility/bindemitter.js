var EventEmitter = require('events').EventEmitter;

function bindEmitter(self) {
  util.loopKeys(EventEmitter.prototype, function(emitter, key) {
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