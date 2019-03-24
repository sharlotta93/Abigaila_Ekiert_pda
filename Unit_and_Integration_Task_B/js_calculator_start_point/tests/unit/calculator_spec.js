var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const expected = 5;
    assert.strictEqual(calculator.runningTotal, expected);
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const expected = 3;
    assert.strictEqual(calculator.runningTotal, expected);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const expected = 15;
    assert.strictEqual(calculator.runningTotal, expected);
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const expected = 3;
    assert.strictEqual(calculator.runningTotal, expected);
  })

});
