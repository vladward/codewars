/*
Sum Arrays
 */

function sum (numbers) {
    "use strict";
    return  numbers.reduce((res,v) => res+v,0);
};