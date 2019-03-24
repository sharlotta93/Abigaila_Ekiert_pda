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

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(4);
    const expected = 24;
    assert.strictEqual(calculator.runningTotal, expected);
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=");
    const expected = 7;
    assert.strictEqual(calculator.runningTotal, expected);
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.clearClick();
    const expected = 3;
    assert.strictEqual(calculator.previousTotal, expected);
  })

});
