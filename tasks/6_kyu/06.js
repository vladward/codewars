/*
Stop gninnipS My sdroW!
 */


const reverseWord = word => [...word].reverse().join('')

const spinWords = string => string.replace(/\w{5,}/g, reverseWord)
