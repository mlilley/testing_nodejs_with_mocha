var should    = require('should');
var myproject = require('../');

describe('Synchronous Adder', function() {
  describe('add()', function() {

    it('should return 3 when adding 1 and 2', function() {
      var adder = new myproject.SyncAdder();
      adder.add(1, 2).should.equal(3);
    });

  });
});