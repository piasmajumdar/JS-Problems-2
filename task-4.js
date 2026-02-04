function findAveragePhonePrice(phones) {
    let total = 0;
    for (const phone of phones) {
        total += phone.price;
    }
    return total / phones.length;
}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);
console.log('Average phone price: ', parseFloat(averagePrice.toFixed(2)));
