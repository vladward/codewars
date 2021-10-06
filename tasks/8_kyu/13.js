/*
Return Two Highest Values in List
 */

function twoHighest(arr) {
    return arr
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((a, b) => b - a)
        .slice(0, 2);
};