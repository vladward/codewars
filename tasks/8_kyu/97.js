/*
Double Char
*/

function doubleChar(str) {
    return str.split('').map(function(s){return s+s}).join('');
}
