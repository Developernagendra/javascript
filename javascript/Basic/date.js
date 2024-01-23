// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//let myCreatedDate = new Date(2023,0,23);
//let myCreatedDate = new Date('2023-01-23');
let myCreatedDate = new Date('2023-01-14');
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / (1000 )));

let newdDate = new Date()
console.log(newdDate);
console.log(newdDate.getMonth());

newdDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
} )
