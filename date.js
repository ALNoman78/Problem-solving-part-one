//  how to show today date and time

// let today = new Date()
// console.log(today);

// let date = new Date("3024-10-09");
// console.log(date);

let date2 = new Date(2091, 10, 20);
console.log(date2.getMonth());
console.log(date2.getDate());


let date3 = new Date(2024, 0, 23)
date3.setMonth(10)
console.log(date3.getDate());
console.log(date3.getMonth());
console.log(date3.toLocaleString("en-GB"));
