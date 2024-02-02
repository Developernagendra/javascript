//control flow
// if (true) {
//     console.log("this is true");
// }

// if (false) {
//     console.log("this is false");
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("show logout button");
// }

// < >  <=  >=  ==  ===  !=  !==

// if (10 > 5) {
//     console.log("10 is greater than 5");
// }

// if (10 < 5) {
//     console.log("10 is less than 5");
// }
// if (10 <= 10) {
//     console.log("10 is less than or equal to 10");
// }
// if (10 >= 10) {
//     console.log("10 is greater than or equal to 10");
// }
// if (10 == 10) {
//     console.log("10 is equal to 10");
// }
// if (10 === 10) {
//     console.log("10 is equal to 10");
// }
// if (10 != 10) {
//     console.log("10 is not equal to 10");
// }
// if (10 !== 10) {
//     console.log("10 is not equal to 10");
// }


// const isUserLoggedIn = true;
// const temperature = 60;

// if(temperature<50){
//     console.log("less than 50");
// }
// else {
//     console.log("greater than 50");
// }

// const score=200;
// if(score>100){
//     let power="fly"
//     console.log(`user has ${power} power`)
// }
// console.log(`user has ${power} power`);

// const balance = 1000;

//if (balance > 500)  console.log("test");
//console.log("test2")

// if (balance > 500) {
//     console.log("you can buy a phone");
// }else if(balance>100){
//     console.log("you can buy a watch");
// }else{
//     console.log("you can buy a pen");
// }


const isUserLoggedIn= true
const debitCard= true
const loggedInFromGoogle= false
const loggedInFromEmail= true

if(isUserLoggedIn && debitCard && 2==3){
    console.log("allows to buy a phone")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow user to login")
}
    
    
    
    