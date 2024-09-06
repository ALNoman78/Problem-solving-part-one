// 12 inch = 1 feet

function incheToFeeet (number){
    let feet = number / 12;
    let mix = feet.toFixed(2);
    return Number(mix);
}
const value = 124;
const newValue = incheToFeeet(value)
console.log(newValue);



// Miles to kilometer convert = 1 mile to 1.60934 kilometers


function mileToKilometer(number) {
    let kilo = number * 1.60934;
    let newKilometer = kilo.toFixed(5)
    let x = Number(newKilometer)
    return x;
}
const kilometer = 23;
const convertKilometer = mileToKilometer(kilometer)
console.log(convertKilometer);