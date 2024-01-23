const accountId = "1234567890"
let accountEmail = "hutrws@gmail.com"
accountPassword = "1234567890"
accountCity = "Hanoi"
let accountCountry ;


// accountId = 2// not allowed


accountEmail = "nc@hc.com"
accountPassword = "212121"
accountCity = "HCM"
/*
prefer not to use var
because of issue in block scope and function scope
*/
console.log(accountId);

console.table({ accountId, accountEmail, accountPassword, accountCity , accountCountry})