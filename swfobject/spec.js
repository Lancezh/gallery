define(function(require) {
  var module = require('./dist/swfobject');
  describe('swfobject', function() {
    it('should has version', function() {
      expect(module.version).to.be.a('string');
    });
  });
});
