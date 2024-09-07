// const heights2 = [167, 190, 120, 165, 137];
// using for number


function heights2 (number){
    let x = Math.max(...number);
    return x;
}
const heightsNum = [167, 190, 120, 165, 137];
const value = heights2(heightsNum)
console.log(value);


//  using in string

function maxNumber (number){
    let word = number.split(" ")
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > newWord.length) {
            newWord = word[i]
        }
    }
    return newWord;
}
const maxStr = "Abdullah AL Noman Mondol "
const maValue = maxNumber(maxStr)
console.log(maValue);