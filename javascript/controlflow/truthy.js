//true
const userEmail="hwih@sd"

if(userEmail){
    console.log("got user email")
}
else{
    console.log("user email not found")
}


//falsy value 

//false,0,-0,"",null,undefined,NaN,BigInt,on

//truthy value

//"0"," ",'false',[],{},{},"",function(){}


// if(userEmail.length===0){
//     console.log("Arry is empty")

// }


const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Arry is empty")

}

// nullish coalescing operator(??) 

let val1;
//val1=5??10
//val1=null??10
//val1=undefined??10
val1=null??10??20


console.log(val1)

//ternary operator

//condition ? true : false

const iceCreamprice = 15
iceCreamprice<=10 ? console.log("less then 10") : console.log("greater then 10")