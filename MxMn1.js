/** Created; by; Sarah; on; 10-May-17. ... */
var Math1 = {
    min: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.min(val, this.min(values))
        }
    },
    max: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.min(val, this.max(values))
        }
    }
}

Math1.min([100,13,3,6]); // 3
Math1.max([100,13,3,6]); // 100