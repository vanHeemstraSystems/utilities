/**
 * Wrap try/catch for v8
 */
function tryCatch(toTry, handleError) {
  try{
    toTry()
  }
  catch(err) {
    handleError(err)
  }
}