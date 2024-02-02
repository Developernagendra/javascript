// for of loop

const arr = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr) {
//     console.log(num);
// }

const greeting = "Hello World!";

for (const char of greeting) {
    // console.log(`each char: ${char}`);
}

}

//maps

const map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set(true, "true");

// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.get(true));


for (const [key, value] of map) 
{
    // console.log(`key: ${key}, value: ${value}`);
}

const myObj = {
    name: "John",
    age: 30,
    city: "New York"
}

for (const [key, value] of Object.entries(myObj)) {
    console.log(`key: ${key}, value: ${value}`);
}
