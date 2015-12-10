"use strict";

var deepFreeze = require('deep-freeze');

function frozenStateReducer(reducer){
  return function(state, action) {
    "use strict";

    state && deepFreeze(state);
    return reducer(state, action);
  }
}

module.exports = frozenStateReducer
