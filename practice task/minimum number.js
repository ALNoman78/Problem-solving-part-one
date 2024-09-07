//  how to get lowest number using math.min () method

function lowest(number) {
    let x = Math.min(...number);
    return x;
}

const minNumber = [120, 32, 54, 23, 54, 62, 3, 23, 43];
const value = lowest(minNumber)
console.log(value);
