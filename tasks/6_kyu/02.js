/*
Persistent Bugger.
 */


const persistence = (num) => {
    if (typeof num !== 'number') {
        return;
    }
    let count = 0
    let mult = num
    while (true) {
        if (mult < 10) {
            return count;
        }
        mult = [...String(mult)].reduce((a, b) => a * b, 1);
        count++
    }
}