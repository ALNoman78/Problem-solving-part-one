// const heights2 = [167, 190, 120, 165, 137];
// using for number

function minNumber (number ){
    let y = Math.min(...number)
    return y;
}
const heights2 = [167, 190, 120, 20, 165, 137];
const value = minNumber(heights2)
console.log(value);


//   lowest word in a string 

function lowestStr(userName){
    let words = userName.split(' ')
    let x = words[0];
    for(let i = 1; i < words.length ; i++){
        if(words[i].length < x.length){
            x = words[i]
        }
    }
    return x;

}
let newName = "Anything what you want to your life";
const updateValue = lowestStr(newName)
console.log(updateValue); 