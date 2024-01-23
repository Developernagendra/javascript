const name="nagendra";
const repoCount=20;

console.log(`my name is ${name} and i have ${repoCount} repositories`);

const gameName="new string(nagendra)";

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('n'));

 const newString =gameName.substring(0,5);
    console.log(newString);

    const anotherString=gameName.slice(-8,5);
    console.log(anotherString);

    const newString1="  nagendra";
    console.log(newString1.trim());


    const url="https://www.google.com";

    console.log(url.replace('https','http'));

     console.log(url.includes('google '));