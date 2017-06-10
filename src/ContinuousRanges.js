var RangeClass = require("./Range.js");
var utils = require("./_utils");

var _internalRange = utils.namedList(["lower","upper","lowerInc","upperInc", "empty"]);
var _emptyInternalRange = _internalRange([null, null, false, false, true])


class floatRange extends RangeClass {
    constructor(settings = {}) {
        super(settings, 0);
        Object.assign(this, utils.OffsetableRangeMixin);
        this.type = "float";
    }
}

class timedeltaRange extends RangeClass {
    constructor(settings = {}) {
        super(settings, 0);
        Object.assign(this, utils.OffsetableRangeMixin);
        this.type = "timedelta";
    }
}

class datetimeRange extends RangeClass {
    constructor(settings = {}) {
        super(settings, 0);
        type = "timedelta";
    }
}

module.exports = {
    floatRange: floatRange,
    timedeltaRange: timedeltaRange,
    datetimeRange: datetimeRange
}
