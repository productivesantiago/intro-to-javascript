describe('types', function() {
  var expect = chai.expect;
  // console.log(require);
  it('should exist', function() {
    // assert.deepEqual(types, undefined, 'expected undefined and got ' + types);
    expect(typeof types).to.equal('object');
  });
  it('should have a method called add', function() {
    expect(types.add).to.be.a('function');
  });
});
