/*
Find The Parity Outlier
 */

const findOutlier = integers => {
    const even = integers.filter(int => int % 2 === 0)
    const odd = integers.filter(int => int % 2 !== 0)

    return even.length === 1 ? even[0] : odd[0]
}