// Calculate the average of odd number

function oddNumber(number) {
    let sum = 0;
    let oddArr = [];
    for (const e of number) {
            if (e % 2 !== 0) {
            oddArr.push(e);
            sum += e;
        }
    }
    let avg = sum / number.length;
    let newNumber = avg.toFixed(3);
    let x = Number(newNumber);
    console.log(oddArr);
    return x;
}
const arr = [1, 3, 5, 6, 7, 9, 11, 13, 2, 5, 6, 8];
const oddValue = oddNumber(arr);
console.log(oddValue);
