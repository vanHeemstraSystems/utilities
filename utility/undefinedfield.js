function undefinedField(prefix) {
  throw new Errors.ValidationError("Value for "+prefix+" must be defined.")
}