const products = [
    { name: 'shampoo', price: 300, quantity: 5},
    { name: 'soap', price: 100, quantity: 2},
    { name: 'toothpaste', price: 200, quantity: 3},
    { name: 'perfume', price: 500, quantity: 4},
    { name: 'lotion', price: 400, quantity: 5},
];

function cartTotal(products) {
    let total =0;
    for(const product of products){
        total += product.price * product.quantity;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log('Total shopping cost: ', shoppingCost);
console.log('Products in cart: ', products.length);