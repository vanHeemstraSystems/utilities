function loopKeys(obj, fn) {
  if (isPlainObject(obj)) {
    var keys = Object.keys(obj);
    var result;
    for(var i=0; i<keys.length; i++) {
      result = fn(obj, keys[i]);
      if (result === false) return;
    }
  }
}