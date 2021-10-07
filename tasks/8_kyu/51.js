/*
Invert values
 */

function invert(array) {
    return array.map((elm) => {
        return elm >= 0 ? -Math.abs(elm) : Math.abs(elm);
    });
}