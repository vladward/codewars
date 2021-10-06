/*
How old will I be in 2099?
 */

function  calculateAge(a,b) {
    if (a>b&&+a-b==1)return `You will be born in ${+a-b} year.`
    else if (a<b&&+b-a==1)return `You are ${b-a} year old.`
    else if (a>b)return `You will be born in ${+a-b} years.`
    else if (a<b) return `You are ${b-a} years old.`
    return 'You were born this very year!'
}