exports = function(context, field) {
    t = [];
    for(let key in context) {
        e = context[key];
        e[field] = e[field].toUpperCase();
        t.push(e);
    } 
    return t;
}
