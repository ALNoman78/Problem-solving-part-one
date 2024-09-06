// leap year method in js
// year / 4 === 0
//  leap year list = 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.


function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        // console.log("This is leap year = ", year);
        return true;
    }else{
        // console.log("this isn't leap year =", year);
        return false;
    }
}
const newYear = 2004;
const checkYear = leapYear(newYear);
console.log(checkYear);



//  new logic leap year 
// if the year divisible by 400 === 0

function leap2(year){
    if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const value = 2400;
const newValue = leap2(value)
console.log(newValue);
