function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function calculator(a, b, operation) {
    if(operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'substract') {
        const result = substract(a, b);
        return result;
    }
    else if (operation === 'multipy') {
        return multiply(a, b);
    }
    else if (operation === 'divide') {
        return divide(a, b);
    }
    else {
        return "Only 'add', 'substract', 'multiply' and 'divide' operations are allowed.";
    }
}

const result = calculator(5, 7, 'substract');
console.log('Result: ', result);