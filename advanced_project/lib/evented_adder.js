var events = require('events');
var util   = require('util');

var Adder = exports.Adder = function() {
  events.EventEmitter.call(this);
};
util.inherits(Adder, events.EventEmitter);

Adder.prototype.add = function(a, b) {
  this.emit('result', a + b);
};
