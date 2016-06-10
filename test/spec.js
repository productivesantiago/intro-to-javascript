describe('types', function() {
  var expect = chai.expect;
  // console.log(require);
  it('should exist', function() {
    // assert.deepEqual(types, undefined, 'expected undefined and got ' + types);
    expect(typeof ourTypes).to.equal('object');
  });
  it('should have a method called add', function() {
    expect(ourTypes.add).to.be.a('function');
  });
});
