/*
Rock Paper Scissors!
 */

function rps(p1, p2) {
    if (p1 === p2) {
        return `Draw!`;
    }
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2) ? 1 : 2} won!`;
}
