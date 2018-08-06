'use strict';

var ATNLContract = function () {
};

ATNLContract.prototype = {
    init: function () {
    },
    set: function (name, value) {
        LocalContractStorage.set(name, value);
    },
    get: function (name) {
        return LocalContractStorage.get(name);
    }
};

module.exports = ATNLContract;