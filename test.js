shuffle = function(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var randorder = shuffle([0,1,2,3,4,5,6]);
var index = 0;

setInterval(function() {
    $('.foo:nth-of-type('+(randorder[index++])+')').fadeIn(300);
}, 300);