//  odd number summation array

// function reverse(array) {
//     let arr = [];
//     let sum = 0;
//     for (const e of array) {
//         if (e % 2 !== 0) {
//             sum += e;
//             arr.push(e)
//         }
//     }
//     console.log(arr);
//     return sum;
// }
// const value = [1, 3, 5, 6, 7, 89, 23,35];
// const updateValue = reverse(value)
// console.log(updateValue);



// reverse array 

function reverseArr(array){
    let arr = array.reverse();
    return arr;
}
const value = [1, 3, 5, 6, 7, 89, 23,35];
const updateValue = reverseArr(value)
console.log(updateValue);