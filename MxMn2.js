/**
 * Created by Sarah on 10-May-17.
 */
var Math2 = {
    min: function(values) {
        return this.calculate(values, Math.min);
    },
    max: function(values) {
        return this.calculate(values, Math.max);
    },
    calculate: function(values, operation) {
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
            return operation(val, this.calculate(values, operation))
        }
    }
}

Math2.min([100,13,3,6]); // 3
Math2.max([100,13,3,6]); // 100

