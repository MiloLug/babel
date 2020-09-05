JSVar * arrayWithHoles = new JSVar(require("./arrayWithHoles"));

JSVar * iterableToArray = new JSVar(require("./iterableToArray"));

JSVar * unsupportedIterableToArray = new JSVar(require("./unsupportedIterableToArray"));

JSVar * nonIterableRest = new JSVar(require("./nonIterableRest"));

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;