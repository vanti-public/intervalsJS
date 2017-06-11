var assert = require('chai').assert;
var range = require("../main.js");

describe('strRange', function() {

    it('tests next', function () {
        var strRange = new range.strRange({lower: 'a', upper: 'c'});

        assert(strRange.next('a') === 'b');
        assert(strRange.next('abc') === 'abd');
        assert(strRange.next('AbC') === 'AbD');

        assert(strRange.next() === "");
    });

    it('tests prev', function () {
        var strRange = new range.strRange({lower: 'd', upper: 'e'});

        assert(strRange.prev('d') === 'c');
        assert(strRange.prev('7') === '6');
        assert(strRange.prev('AbC') === 'AbB');
        assert(strRange.prev() === "");
    });

    it ('tests last', function () {
        var strRange = new range.strRange({lower: 'd', upper: 'k'});
        var noLast = new range.strRange({lower: 'h'});

        assert(noLast.last() === null);

        assert(strRange.last() == 'j');
    });
});
