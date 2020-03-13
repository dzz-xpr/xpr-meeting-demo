let request = require("/xpr/request");

exports.process = function(context, options) {
    return request.XprApi({
        "method" : "GET",
        "uri" : "/articles/",
        "params" : {}, "data" : {}
    }); 
}
