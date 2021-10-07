/*
Duplicate Encoder
 */

const duplicateEncode = word =>
    word
        .toLowerCase()
        .split('')
        .map(
            (char, _, array) =>
                array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')'
        )
        .join('')