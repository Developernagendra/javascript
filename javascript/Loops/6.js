//reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);


const shoppingCart = [{
    itemName: "banana",
    type: "fruit",
    price: 2
}, {
    itemName: "pants",
    type: "clothing",
    price: 20
}, {
    itemName: "shirt",
    type: "clothing",
    price: 15
}, {
    itemName: "rockets",
    type: "toy",
    price: 10
}, {
    itemName: "bbq sauce",
    type: "food",
    price: 5
}];

const total = shoppingCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}

    , 0);
console.log(total);
