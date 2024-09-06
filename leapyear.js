// leap year

function leapyear(leap){
    if(leap % 4 === 0 && leap % 100 !== 0){
        return true;
    }else{
        return false;
    }
}
const value = 2044;
const newValue = leapyear(value)
console.log(newValue);