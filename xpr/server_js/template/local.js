let upper_array = require("../modules/upper_array");

exports.process = function(context, options) {
    return upper_array( context, options["field"] );
}
