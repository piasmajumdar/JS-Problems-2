const products = [
    { name: 'shampoo', price: 300},
    { name: 'soap', price: 100},
    { name: 'toothpaste', price: 200},
    { name: 'perfume', price: 500},
    { name: 'lotion', price: 400},
];

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total);