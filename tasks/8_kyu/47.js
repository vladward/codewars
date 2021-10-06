/*
Abbreviate a Two Word Name
 */

function abbrevName(name){
    const nam = name.split(' ');
    return `${nam[0].charAt(0).toUpperCase()}.${nam[1].charAt(0).toUpperCase()}`;
}