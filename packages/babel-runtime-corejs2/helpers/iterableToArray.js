JSVar * _Array$from = new JSVar(require("../core-js/array/from"));

JSVar * _isIterable = new JSVar(require("../core-js/is-iterable"));

JSVar * _Symbol = new JSVar(require("../core-js/symbol"));

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _isIterable(Object(iter))) return _Array$from(iter);
}

module.exports = _iterableToArray;