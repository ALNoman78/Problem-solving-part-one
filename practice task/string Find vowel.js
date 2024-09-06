function vowelName(vowel) {
    let vowelStr = "a,e,i,o,u"
    let updateVowelStr  = vowelStr.split(",")
    for (let i = 0; i < vowel.length; i++) {
        if(updateVowelStr.includes(vowel[i].toLowerCase())){
            console.log("This is i found form the string = ", vowel[i]);
        }
    }
    return vowel;
}
const userName = "Abdullah AL Noman"
const valueOfVowel =  vowelName(userName)
console.log(valueOfVowel);