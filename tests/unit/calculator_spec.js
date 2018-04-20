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

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.numberClick(2);
    calculator.operatorClick("-")
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(30, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(2000, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(2.25, calculator.runningTotal);

  })

  it('all numbers can be clicked', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(9);
    assert.equal(0123456789, calculator.runningTotal);
  })

  it('can clear', function(){
    calculator.numberClick(2);
    calculator.numberClick(4);
    calculator.numberClick(6);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })







});
