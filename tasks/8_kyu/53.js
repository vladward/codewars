/*
Get the mean of an array
 */

function getAverage(marks){
    return Math.floor(marks.reduce((x, y) => x + y) / marks.length);
}