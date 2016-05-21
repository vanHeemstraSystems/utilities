/*
 * Filename: changeproto.js
 */
var self = this; // Set the context locally, for access protection

function ChangeProto() {
  self = self.changeProto;
}

ChangeProto.prototype.changeProto = function(object, newProto) {
  object.__proto__ = newProto;
}

module.exports = ChangeProto;
// REMOVE ALL BELOW

// function changeProto(object, newProto) {
//   object.__proto__ = newProto;
// }