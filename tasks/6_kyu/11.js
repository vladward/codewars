/*
Create Phone Number
 */

function createPhoneNumber(numbers) {
        const numbersString = numbers.join('')
        const firstPart = numbersString.slice(0, 3)
        const secondPart = numbersString.slice(3, 6)
        const thirdPart = numbersString.slice(6, 10)

        return `(${firstPart}) ${secondPart}-${thirdPart}`
}