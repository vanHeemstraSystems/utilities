var Promise = require(path.join(paths.libraries, '/bluebird.js'));
/**
 * Return a promise if a hook is asynchronous
 * Note: If no hook is asynchronous, `fn` can still be asynchronous in which
 * case we return a promise or undefined
 * @param {Object} options, the arguments are:
 * - preHooks {Array} the methods to execute before the main one
 * - postHooks {Array} the methods to execute after the main one
 * - async {boolean} whether this this hook is asynchronous or not
 * - doc {Document} the document that triggered the hooks
 * - fn {Function} the main function
 * - fnArgs {Array} arguments for `fn`
 * @return {Promise=}
 */
function hook(options) {
  var preHooks = options.preHooks;
  if (Array.isArray(preHooks) === false) {
    preHooks = [];
  }
  var postHooks = options.postHooks;
  if (Array.isArray(postHooks) === false) {
    postHooks = [];
  }
  var doc = options.doc; // We need the doc to set the context of the hooks
  var async = options.async || false;
  var fn = options.fn; // The function that we are hook
  var fnArgs = options.fnArgs;

  if (async === true) {
    return new Promise(function(resolve, reject) {
      _asyncHook({
        resolve: resolve,
        reject: reject,
        preHooks: preHooks,
        postHooks: postHooks,
        doc: doc,
        fn: fn,
        fnArgs: fnArgs
      });
    });
  }

  return _syncHook({
    preHooks: preHooks,
    postHooks: postHooks,
    doc: doc,
    fn: fn,
    fnArgs: fnArgs
  });
}
function _syncHook(args) {
  var preHooks = args.preHooks;
  var postHooks = args.postHooks;
  var fn = args.fn;
  var doc = args.doc;
  var fnArgs = args.fnArgs;

  for(var i=0; i<preHooks.length; i++) {
    preHooks[i].call(doc);
  }
  var result = fn.apply(doc, fnArgs);
  for(var j=0; j<postHooks.length; j++) {
    postHooks[j].call(doc);
  }
  return result;
}
function _asyncHook(args) {
  // One of the hook, or the function is asynchronous, so we will
  // always return a promise
  // We only need to keep track of the result return/resolved for fn

  var preHooks = args.preHooks;
  var postHooks = args.postHooks;
  var fn = args.fn;
  var fnArgs = args.fnArgs;
  var doc = args.doc;
  var resolve = args.resolve;
  var reject = args.reject;
  var args = args.args;

  var result;

  var nextPost = function() {
    if (typeof resolve === "function") {
      resolve(result);
    }
    return result;
  }

  var executeMain = function() {
    result = fn.apply(doc, fnArgs);
    if (result instanceof Promise) {
      return result.then(function(res) {
        result = res;
        executeHooks(0, postHooks, doc, reject, nextPost);
      }).error(reject);
    }
    return executeHooks(0, postHooks, doc, reject, nextPost);
  }

  var nextPre = function() {
    tryCatch(executeMain, function (err) {
      return reject(err);
    });
  }
  return executeHooks(0, preHooks, doc, reject, nextPre);
}