const { assert } = require('chai');
const sinon = require('sinon');

// Notice the order doesn't make a difference
const testTarget = require('./index.js');
const SomeClass = require('./SomeClass.js');

const mockString = 'A mock string';

describe('The test', () => {
  before(() => {
    sinon.stub(SomeClass.prototype, 'getAString').returns(mockString);
  });
  it('Should mock the string', () => {
    assert.equal(testTarget.doSomeStuff(), mockString);
  })
  after(() => {
    SomeClass.prototype.getAString.restore();
  });
});
