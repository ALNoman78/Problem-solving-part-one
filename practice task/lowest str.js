//  find the lowest number of string you have

function lowestWord(name) {
    let words = name.split(" ");
    let indexNumber = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < indexNumber.length) {
            indexNumber = words[i]
        }
    }
    return indexNumber;
}
const name = "Abdullah AL Noman";
const value = lowestWord(name)
console.log(value)
