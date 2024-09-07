//  max number in array

function  maxNumber (number){
    let x = Math.max(...number)
    // console.log(x);
    return x;
}
const minNumber = [120, 32, 54, 23, 54, 62, 3, 23, 43];
const value = maxNumber(minNumber)
console.log(value);