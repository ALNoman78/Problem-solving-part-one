// remove duplicate data form array

function noDuplicate(array) {
    let empty = [];
    for (const e of array) {
        if(empty.includes(e) === false){
            empty.push(e)
        }
    }
    return empty;
}
// const arr = ["abul", "Labu", "kabul", "dablu", "Labu", "kabul"]
const arr = [1, 3, 4, 2, 1, 1, 4, 5, 3, 5, 12, 34, 12, 65];
const value = noDuplicate(arr);
console.log(value);

// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     if()
// }
