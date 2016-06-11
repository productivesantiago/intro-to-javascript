describe('types', function() {
  var expect = chai.expect;
  // This first test will pass be default, so you can see what a passing test looks like.
  it('should exist', function() {
    expect(typeof ourTypes).to.equal('object');
  });
  // Some of the tests are passing! Why do you think that is?
  it('should have a property called thisShouldBeUndefined', function() {
    expect(ourTypes.thisShouldBeUndefined).to.not.equal(null);
  });
   // You probably guessed it. Some of these tests are just testing that things exist, and the tests for the correct values are failing!
  it('should have a property called thisShouldBeUndefined that has a value of undefinded', function() {
    expect(ourTypes.thisShouldBeUndefined).to.equal(undefined);
  });
  // Remember, undefined represents no value being assigned yet. 'undefined' is a string, which is a value. Not that confusing, right? ;)
  it('should have a property called thisShouldBeNull', function() {
    expect(ourTypes.thisShouldBeNull).to.not.equal(undefined);
  });

  it ('should have a property called thisShouldBeNull that has a value of null', function() {
    expect(ourTypes.thisShouldBeNull).to.equal(null);
  });

  it('should have a property called aBoolean', function() {
    expect(ourTypes.aBoolean).to.not.equal(null);
  });
});
