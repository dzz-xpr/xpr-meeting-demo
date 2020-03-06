exports.upper_array = function(context, field) {
    t = [];
    context.forEach( e => (){
        e[field] = e[field].toUpperCase();
        t.push(e);
    } );
    return e;
}
