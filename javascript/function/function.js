// function

function sayMyName() {
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
}

//sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

 const result=addTwoNumbers(5, 10);

    // console.log("result:",result);

function loginUserMessage(username = "shruti" ){
    if(username === undefined){
        console.log ("Please enter a username");
        return;
    }
    return `Welcome ${username} just logged in`;
}

//console.log(loginUserMessage("John"));

// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(10, 20,499));

const user={
    username:"shruti",
    price:2000,
}
function handleObject(anyobject){
    console.log(`username: ${anyobject.username} price: ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"shruti",
    price:1000,
    
});

const myNewArray=[200,300,400,500,600,700,800,900,1000];

function returnSecondValue(getArray){
    return getArray[3];

}
console.log(returnSecondValue(myNewArray));
    