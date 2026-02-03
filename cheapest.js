const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'iPhone', price: 30000, camera: '10mp', color: 'silver'},
    {name: 'Nokia', price: 25000, camera: '15mp', color: 'blue'},
    {name: 'Oppo', price: 40000, camera: '20mp', color: 'green'},
    {name: 'Realme', price: 15000, camera: '16mp', color: 'white'},
];

function getCheapestPhone (phones) {
    let min = phones[0];
    for (const phone of phones) {
        if(phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('cheapest phone is: ', cheap);


//max price phone

function getMaxPricePhone (phones) {
    let max = phones[0];
    for (const phone of phones) {
        if(phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const expensive = getMaxPricePhone(mobiles);
console.log('most expensive phone is: ', expensive);    