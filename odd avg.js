// Calculate the average of odd number

function oddNumber(number) {
    let sum = 0;
    for (const e of number) {
        sum += e;
        // let avg = sum ;
    }
    return sum / number.length;
}
const arr = [1, 3, 5, 6, 7, 9, 11, 13, 2, 5, 6, 8];
const oddValue = oddNumber(arr)
console.log(oddValue);
