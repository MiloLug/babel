JSVar * temporalUndefined = new JSVar(require("./temporalUndefined"));

JSVar * tdz = new JSVar(require("./tdz"));

function _temporalRef(val, name) {
  return val === temporalUndefined ? tdz(name) : val;
}

module.exports = _temporalRef;