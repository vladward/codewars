/*
I love you, a little , a lot, passionately ... not at all
 */

function howMuchILoveYou(nbPetals) {
    const arr = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];
    for (let i = 0; i <= nbPetals-1; i += 1) {

        if (i === nbPetals-1) {
            return arr[i%6];
        }
    }
}
