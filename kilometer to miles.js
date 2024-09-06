//  kilometer to miles 

function kilometerToMiles (kilo){
    let kilometer = kilo * 0.621371;
    let newKm = kilometer.toFixed(3)
    let convertTonumber = Number(newKm)
    return convertTonumber;
}
const kilometer = 23;
const newKilometerValue = kilometerToMiles(kilometer);
console.log(newKilometerValue);