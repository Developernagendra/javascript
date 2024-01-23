//# primitive data types

// 7 primitive data types
// 1. string 
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint 

const score = 100;
const scoreValue = 100.5;

const isLogged = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 8901234567890n;
// reference data types or non primitive data types
// 1. object
// 2. array
// 3. function


//array
const heros = ['superman', 'batman', 'spiderman'];

//object
 let myobj ={
    name: 'superman',
    age: 30,
    isAlive: true

}

//function
 function sayHello(){
        console.log('hello');
    }
    
    console.log(typeof outSideTemp );


    //++++++++++++++++++++++++++++++++++++//

    // stack(primitive type) 
    // heap(reference type)

    // primitive type
    let myBlogger = 'tech blogger';

    let anothername = myBlogger;
    anothername = 'travel blogger';

    console.log(myBlogger);
    console.log(anothername);

    let userOne={
        email:"usre@gmail.com",
        upi:"user@okicici"

    }

    let userTwo = userOne;
    userTwo.email = "nagendra@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);



