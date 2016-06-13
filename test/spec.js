describe('types, values, operators and variables', function() {
  var expect = chai.expect;

  describe('types and values', function() {
    // This first test will pass be default, so you can see what a passing test looks like.
    it('should exist', function() {
      expect(typeof ourTypes).to.equal('object');
    });
    // These next four are the example tests we will make pass together.
    it('should have a variable named example', function() {
      expect(example).to.not.equal(null);
    });

    it('should have a variable named example that has a value', function() {
      expect(example).to.not.equal(undefined);
    });

    it('should have a variable named example with a value that is a string', function() {
      expect(typeof example).to.equal('string');
    });

    it('should have a varibale named example with a value of: Javascript is fun!', function() {
      expect(example).to.equal('Javascript is fun!');
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
    // Reminder, null is not nothing, but a reserved word 
    // in js that specifically is used to denote that a 
    // value or property has no value assigned to it yet.
    it ('should have a property called thisShouldBeNull that has a value of null', function() {
      expect(ourTypes.thisShouldBeNull).to.equal(null);
    });

    it('should have a property called aBoolean', function() {
      expect(ourTypes.aBoolean).to.not.equal(null);
    });
    // Don't forget, a boolean is either true or false,
    // but not a string!
    it('should have a property called aBoolean that has a value of false', function() {
      expect(ourTypes.aBoolean).to.equal(false);
    });

    it('should have a property called anotherBoolean', function() {
      expect(ourTypes.anotherBoolean).to.not.equal(null);
    });
    // anotherBoolean should have a value
    it('should have a property called anotherBoolean that is defined', function() {
      expect(ourTypes.anotherBoolean).to.not.equal(undefined);
    });

    it('should have a property called anotherBoolean that has a value of true', function() {
      expect(ourTypes.anotherBoolean).to.equal(true);
    });
    // Do you remember what a string is?
    it('should have a property called aString that has a value', function() {
      expect(ourTypes.aString).to.not.equal(null || undefined);
    });
    // Here's a cool tip. Check out escape characters!
    // For example, if you want to use a single quote
    // inside of a string that you created using single
    // quotes, well here's how you do it:
    // 'This string\'s using an apostrophe inside the
    // string!'
    it('should have a property called aString that is a string', function() {
      expect(typeof ourTypes.aString).to.equal('string');
    });
    // Now for our last primitive data type, numbers!
    // Well done, you've made it!
    it('should have a property called aNumber that has a value', function() {
      expect(ourTypes.aNumber).to.not.equal(undefined || null);
    });

    it('should have a property called aNumber that has a value of number', function() {
      expect(typeof ourTypes.aNumber).to.equal('number');
    });
    // Just to make sure you're also learning to read the
    // test suites, here's a curve ball!
    it('should have a property called aNumber that has a value of 5555', function() {
      expect(ourTypes.aNumber).to.equal(5555);
    });
  });

  describe('variables and arithmetic operators', function() {
    // This test just verifies that the variable foo exists!
    it('should have a variable named foo', function() {
      expect(foo).to.not.equal(null);
    });
    // This test makes sure that foo has no value assigned to it.
    it('should have a variable named foo with no value', function() {
      expect(foo).to.equal(undefined);
    });
    it('should have a variable called bar that has a value', function() {
      expect(bar).to.not.equal(null || undefined);
    });
    it('should have a variable named bar that has been assigned a string', function() {
      expect(typeof bar).to.equal('string');
    });
    it('should have a variable named num1 with a value of 10', function() {
      expect(num1).to.equal(10);
    });
    // Remember, you can pass values via variables. 
    // In fact, other than storage, that's the best use
    // for a variable! 
    // You can also assign variables values by using other variables.
    /* for example, you can do this
       var first = 3;
       var second = 12;
       var third = first + second;
       console.log(third);
       what do you think the value of third will be?
       Try it out yourself in the console!
       */
    it('should have a variable called num2 with a value of 20', function() {
      expect(num2).to.equal(20);
    });
    it('should have a variable named total that equals the sum of num1 plus num2', function() {
      expect(total).to.equal(num1 + num2);
    });
    it('should have a variable named num3 with a value of 5', function() {
      expect(num3).to.equal(5);
    });
    it('should have a variable named minus with a value equal to total - num3', function() {
      expect(minus).to.equal(total - num3);
    });
    it('should have a variable named divided with a value of total / num3', function() {
      expect(divided).to.equal(total / num3);
    });
    // Use the modulo % operator to find the remainder when dividing two numbers.
    it('should have a variable named remainder with a value of 2', function() {
      expect(remainder).to.equal(2);
    });
    // toString is a native javascript method that returns its input as a string. We will go over methods and functions soon, don't worry if you haven't heard of them yet.
    // Feel free to start reading about functions if you and your partner have extra time.
    it('should have a variable named remainderToString with a value of \'2\'', function() {
      expect(remainderToString).to.equal(remainderToString.toString());
    });
  });

  describe('comparison operators', function() {

    it('should have a variable named firstResult which gets its value from finding if num1 is greater than num3', function() {
      expect(firstResult).to.equal(true);
    });

    it('should have a variable named secondResult which gets its value from finding if total minus num2 is equal to num1', function() {
      expect(secondResult).to.equal(true);
    });

    it('should have a variable named numberAsString that has a value of the number 10 in a string', function() {
      expect(numberAsString).to.equal('10');
    });

    it('should have a variable named equals that gets its value from comparing if num1 and numberAsString have the same value', function() {
      expect(equals).to.equal(true);
    });

    it('should have a variable named deepEquals that gets its value from comparing if num1 and numberAsString have the same value and the same types', function() {
      expect(deepEquals).to.equal(false);
    });
    // Take a moment to talk with your partner about why
    // you got the results you did in the last two tests.
    it('should have a variable named thirdResult which gets its value from finding if deepEquals is less than or greater to num1', function() {
      expect(thirdResult).to.equal(true);
    });
    // Talk with your partner, and make sure you understand why the above test passes.
    it('should have a varibale named fourthResult that gets its value from finding if num1 is less than or equal to numberAsString', function() {
      expect(fourthResult).to.equal(true);
    });
  });

  describe('operator precedence', function() {

    it('should have a variable that evaluates (10 * 10) == \'100\'', function() {
      expect(a).to.equal(true);
    });

    it('should have a variable that evaluates 2 * (10 / 2) + 2', function() {
      expect(b).to.equal(2 * (10 / 2) + 2);
    });
    it('should have a variable that evaluates 8 + 1 * 5 - 4 / 2', function() {
      expect(c).to.equal(false);
    });

    it('should have a variable that evaluates \'true \' === true, ', function() {
      expect(d).to.equal(false);
    });

    it('should have a variable that evaluates 1 == true', function() {
      expect(e).to.equal(true);
    });

    it('should have a variable that evalauates 1 === true', function() {
      expect(f).to.equal(false);
    });
  });

});

describe('flow and conditionals', function() {
  var expect = chai.expect;

  describe('the example', function() {
    expect(flowAnswerA).to.equal(true);
  });

  describe('if', function() {

  });

  describe('if else', function() {

  });

  describe('if else if else', function() {

  });

  describe('switch', function() {

  });
});



















