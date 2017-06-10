var RangeClass = require("./Range.js");
var utils = require("./_utils");

var _internalRange = utils.namedList(["lower","upper","lowerInc","upperInc", "empty"]);
var _emptyInternalRange = _internalRange([null, null, false, false, true]);


class floatRange extends RangeClass {
    /**
    @class floatRange
    @extends RangeClass
    @description Range that operates on float.
    @param {object} settings - The settings of the range.
    @param {object|scalar} settings.lower - The lower end of the range
    @param {object|scalar} settings.upper - The upper end of the range
    @param {object|scalar} settings.lowerInc - ``true`` if lower end should be included in range. Defaults to ``true``.
    @param {object|scalar} settings.upperInc - ``true`` if upper end should be included in range. Defautls to ``false``.
    */
    constructor(settings = {}) {
        settings.type = "float";
        super(settings);
        Object.assign(this, utils.OffsetableRangeMixin);
        /**
        @memberof floatRange
        @description The type of values in the range.
        */
        this.type = settings.type;
    }
}

class timedeltaRange extends RangeClass {
    constructor(settings = {}) {
        super(settings);
        Object.assign(this, utils.OffsetableRangeMixin);
        this.type = "timedelta";
    }
}

class datetimeRange extends RangeClass {
    constructor(settings = {}) {
        super(settings);
        type = "timedelta";
    }
}

module.exports = {
    floatRange: floatRange,
    timedeltaRange: timedeltaRange,
    datetimeRange: datetimeRange
};