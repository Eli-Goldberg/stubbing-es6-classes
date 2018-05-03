const SomeClass = require('./SomeClass');
const someObject = new SomeClass();

function doSomeStuff() {
  const theString = someObject.getAString();
  return theString;
}

module.exports = {
  doSomeStuff
}
