// find the longest word

function user(name) {
    let word = name.split(" ");
    let us = "";
    for(let i = 0; i < word.length ; i++){
        if(word[i].length > us.length){
            us = word[i]
        }
    }
    return us;
}
const userName = "Abdullah AL Noman";
const value = user(userName);
console.log(value);