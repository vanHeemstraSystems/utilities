function pseudoTypeError(type, missingField, prefix) {
  throw new Errors.ValidationError("The raw "+type+" object for "+prefix+" is missing the required field "+missingField+".")
}