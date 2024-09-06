//  how to use work swap in js 
// 1st of all i need temporary variable then it works

let a = 5
let b = 7 
console.log(a , b); // original value
const temp = a; // temporary variable
a = b;
b = temp; // then it called again temp = a = 5;
console.log(a , b);


//  array destructing 

let x = 5;
let y = 10;
console.log(x, y);
[x , y ]  = [ y , x]
console.log(x, y);