// The Fahrenheit to Celsius formula is expressed as °C = (°F - 32) × 5/9; 
// Write a function to convert temperature from Celsius to Fahrenheit.

function fahrenheittoCelsius (cel){
    let x = (cel - 32) * 5/9
    return x;
}
const cel = 134
const value = fahrenheittoCelsius(cel)
console.log(value);