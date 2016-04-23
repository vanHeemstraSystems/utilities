function recurse(key, joins, modelTo, all, done) {
  return (util.isPlainObject(modelTo) && modelTo.hasOwnProperty(key))
    || ((all === true) && (done[joins[key].model.getTableName()] !== true))
}