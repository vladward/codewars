/*
If you can't sleep, just count sheep!!
 */

var countSheep = function (num) {
    var meg = '';
    for (var i = 0; i < num; i++) {
        meg += (i+1) + ' sheep...';
    }
    return meg;
}
