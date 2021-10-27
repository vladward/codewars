/*
Transportation on vacation
*/

function rentalCarCost(d) {
    oneDay = 40
    if (d >= 7) {
        return ((d * oneDay) - 50)
    } else if (d >= 3) {
        return ((d * oneDay) - 20)
    } else {
        return (d * oneDay)
    }
}
