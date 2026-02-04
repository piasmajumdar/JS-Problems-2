function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Both inputs must be numbers';
    }               
    const mult = num1 * num2;
    return mult;
}
const result = multiply([5], 'seven');
console.log('Result: ', result);

function fullName(first, second) {
    if(typeof first !== 'string') {
        return 'First name should be strings';
    }
    else if(typeof second !== 'string') {
        return 'Second name should be strings';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName(5, 'Smith');
console.log('Full Name: ', full);


function getPrice(product) {
    // console.log(typeof product);
    if(typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'shampoo', price: 300});
console.log('Price: ', price);



function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}
const second = getSecond(45);
console.log('Second number: ', second);