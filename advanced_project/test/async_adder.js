var should    = require('should');
var myproject = require('../');

describe('Asynchronous Adder', function() {
  describe('add()', function() {

    it('should callback with 3 when adding 1 and 2', function(done) {
      var adder = new myproject.AsyncAdder();
      adder.add(1, 2, function(result) {
        result.should.equal(3);
        done();
      });
    });

  });
});
